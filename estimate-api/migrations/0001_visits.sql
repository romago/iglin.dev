-- One row per counted visit to iglin.dev. Rows older than two days are deleted by the worker.
-- ip holds a SHA-256 of the visitor's IP and the date, only used to skip repeats within 30 minutes.
CREATE TABLE IF NOT EXISTS visits (ts INTEGER NOT NULL, ip TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS visits_ts ON visits (ts);
