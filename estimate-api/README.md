# Quick Estimate API

Cloudflare Worker behind the "Quick Estimate" section on iglin.dev. It checks Cloudflare Turnstile,
asks an AI model for an hours breakdown, turns hours into a price with `HOURLY_RATE`, and emails
roman@iglin.dev through that PrivateEmail mailbox's own SMTP server: once when someone runs an
estimate, and again with their name and email when they press "Send to Roman". Everything here fits the free plans.

## Local development

```bash
cd estimate-api && npm install
cp .dev.vars.example .dev.vars   # AI_PROVIDER=mock, Turnstile test keys
npm run dev                      # http://localhost:8787, used by the site's .env.development
```

## Going live

1. **Cloudflare** (free account): `npx wrangler login`.
2. **Turnstile**: Cloudflare dashboard → Turnstile → Add widget, hostnames `iglin.dev` and `www.iglin.dev`,
   mode Managed. Copy the site key and the secret key.
3. **AI key**, one of:
   - Gemini (free tier): key from https://aistudio.google.com/apikey, keep `AI_PROVIDER = "gemini"`.
     The free models are often overloaded, so when every model in `GEMINI_MODELS` fails the worker
     falls back to `WORKERS_AI_MODEL` on Cloudflare Workers AI (free daily allowance, no key).
   - Claude API (paid per use, a few cents per estimate): key from https://console.anthropic.com,
     set `AI_PROVIDER = "claude"`. A Claude Max subscription cannot be used for this.
4. **Email**: nothing to sign up for. The worker logs in to mail.privateemail.com:465 as
   `SMTP_USER` (roman@iglin.dev) and sends the notifications from that mailbox to itself.
5. Check `HOURLY_RATE` in `wrangler.toml`, then set the secrets and deploy:

   ```bash
   npx wrangler secret put TURNSTILE_SECRET
   npx wrangler secret put GEMINI_API_KEY      # or ANTHROPIC_API_KEY
   npx wrangler secret put SMTP_PASSWORD       # the roman@iglin.dev mailbox password
   npx wrangler secret put TICKET_SECRET       # any long random string, e.g. openssl rand -hex 32
   npm run deploy
   ```

6. Put the worker URL and the Turnstile site key into `/.env.production` (both are public),
   commit and push to `main`. Until both are set, the form falls back to a prefilled email.

## Protection

- Turnstile on every estimate; the server verifies the token before calling the model.
- Per-IP rate limit (3 requests a minute per endpoint), hidden honeypot field, CORS limited to `ALLOWED_ORIGINS`.
- "Send to Roman" carries an HMAC-signed ticket that expires after 2 hours, so it needs no second bot check.
- The model only returns hours; the price is computed on the server.
