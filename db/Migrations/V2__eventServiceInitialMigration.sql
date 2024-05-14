CREATE TABLE IF NOT EXISTS event_categories (
    category_id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS events (
    event_id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    start_time TIMESTAMP WITHOUT TIME ZONE,
    end_time TIMESTAMP WITHOUT TIME ZONE,
    location VARCHAR(255),
    organizer_id BIGINT,
    category_id BIGINT,
    FOREIGN KEY (category_id) REFERENCES event_categories(category_id),
    FOREIGN KEY (organizer_id) REFERENCES users(user_id) -- Ensure users table exists in the same database
);

CREATE TABLE IF NOT EXISTS event_files (
    file_id BIGSERIAL PRIMARY KEY,
    event_id BIGINT NOT NULL,
    file_url VARCHAR(255) NOT NULL,
    file_type VARCHAR(100),
    description TEXT,
    uploaded_at TIMESTAMP WITHOUT TIME ZONE,
    FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE CASCADE
);
