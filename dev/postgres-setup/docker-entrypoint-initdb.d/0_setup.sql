CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS sessions (
  id UUID PRIMARY KEY,
  summary TEXT,
  length INT,
  date TIMESTAMPTZ,
  user_id UUID REFERENCES users (id)
);