CREATE TABLE users (
    user_id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    country VARCHAR(255),
    city VARCHAR(255),
    zip VARCHAR(10),
    verified_user BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Create unique constraints if needed
ALTER TABLE users ADD CONSTRAINT username_unique UNIQUE (username);
ALTER TABLE users ADD CONSTRAINT email_unique UNIQUE (email);


CREATE TABLE user_files (
    file_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    file_url TEXT NOT NULL,
    file_type VARCHAR(50),
    description TEXT,
    uploaded_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
