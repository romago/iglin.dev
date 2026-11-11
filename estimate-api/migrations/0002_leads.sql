-- Every form submission on iglin.dev (contact, quick estimate, "send to Roman", package order).
-- Saved before the notification email goes out, so a lost or spam-filtered email never loses a lead.
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts INTEGER NOT NULL,            -- unix time
  kind TEXT NOT NULL,             -- contact | estimate | send | order
  name TEXT,
  email TEXT,
  summary TEXT NOT NULL,          -- one line for lists and reports
  details TEXT NOT NULL,          -- JSON with the full submission
  country TEXT,
  email_status TEXT NOT NULL      -- pending | sent | failed: <reason>
);
CREATE INDEX IF NOT EXISTS leads_ts ON leads (ts);
