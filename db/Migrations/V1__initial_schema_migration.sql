CREATE TABLE users (
   user_id SERIAL PRIMARY KEY,
   username VARCHAR(255) NOT NULL,
   email VARCHAR(255) UNIQUE NOT NULL,
   password_hash VARCHAR(255) NOT NULL,
   created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
   updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now()
);

CREATE TABLE user_files (
    file_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    file_url TEXT NOT NULL,
    file_type VARCHAR(50),
    description TEXT,
    uploaded_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
