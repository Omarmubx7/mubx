-- Comprehensive schema update for contact_submissions table
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS name TEXT,
ADD COLUMN IF NOT EXISTS brand_name TEXT,
ADD COLUMN IF NOT EXISTS website TEXT,
ADD COLUMN IF NOT EXISTS goal TEXT,
ADD COLUMN IF NOT EXISTS budget TEXT,
ADD COLUMN IF NOT EXISTS deadline TEXT,
ADD COLUMN IF NOT EXISTS language TEXT;

-- Comments for clarity
COMMENT ON COLUMN contact_submissions.name IS 'The full name of the lead';
COMMENT ON COLUMN contact_submissions.brand_name IS 'The company or brand name of the lead';
COMMENT ON COLUMN contact_submissions.website IS 'The current website URL of the lead';
