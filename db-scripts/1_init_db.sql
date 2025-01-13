
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    email VARCHAR(150) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE breweries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    country VARCHAR(100)
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE beers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    abv NUMERIC(3, 1) CHECK (abv BETWEEN 0 AND 20),
    brewery_id INT,
    category_id INT,
    CONSTRAINT fk_brewery FOREIGN KEY (brewery_id) REFERENCES breweries(id),
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    rating SMALLINT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    user_id INT,
    beer_id INT,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_beer FOREIGN KEY (beer_id) REFERENCES beers(id)
);

CREATE TABLE favorites (
    user_id INT,
    beer_id INT,
    PRIMARY KEY (user_id, beer_id),
    CONSTRAINT fk_favorite_user FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_favorite_beer FOREIGN KEY (beer_id) REFERENCES beers(id)
);

CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    url TEXT,
    beer_id INT,
    CONSTRAINT fk_photo_beer FOREIGN KEY (beer_id) REFERENCES beers(id)
);

CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    type VARCHAR(50),
    beer_id INT,
    CONSTRAINT fk_ingredient_beer FOREIGN KEY (beer_id) REFERENCES beers(id)
);
