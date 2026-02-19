-- Add brand_name and website columns to contact_submissions table
-- Run this in your Supabase SQL Editor

ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS brand_name TEXT,
ADD COLUMN IF NOT EXISTS website TEXT;

-- Update existing records if needed (optional)
COMMENT ON COLUMN contact_submissions.brand_name IS 'The company or brand name of the lead';
COMMENT ON COLUMN contact_submissions.website IS 'The current website URL of the lead';
