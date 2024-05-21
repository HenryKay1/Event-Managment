-- Add new columns to the existing table
ALTER TABLE users
ADD COLUMN address VARCHAR(255),
ADD COLUMN country VARCHAR(255),
ADD COLUMN city VARCHAR(255),
ADD COLUMN zip VARCHAR(10),
ADD COLUMN verified_user BOOLEAN DEFAULT false



