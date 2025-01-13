-- -fill with dummy data-
-- Users Table
INSERT INTO users (first_name, email, password) VALUES
('Alice', 'alice@example.com', 'password123'),
('Bob', 'bob@example.com', 'securepass456'),
('Charlie', 'charlie@example.com', 'mypassword789'),
('Diana', 'diana@example.com', 'passwordabc'),
('Eve', 'eve@example.com', 'evepass321'),
('Frank', 'frank@example.com', 'frankpass654'),
('Grace', 'grace@example.com', 'gracepass987'),
('Hank', 'hank@example.com', 'hankpass001'),
('Ivy', 'ivy@example.com', 'ivypass112'),
('Jack', 'jack@example.com', 'jackpass999');

-- Breweries Table
INSERT INTO breweries (name, country) VALUES
('Golden Hop Brewery', 'USA'),
('Silver Barrel Brewing', 'Germany'),
('Emerald Aleworks', 'UK'),
('Ruby Fermentations', 'Belgium'),
('Crystal Brew Co.', 'Canada'),
('Amber Grain Co.', 'Netherlands'),
('Pearl Brewery', 'Australia'),
('Sapphire Suds', 'Ireland'),
('Opal Brewing', 'France'),
('Diamond Draft Co.', 'Japan');

-- Categories Table
INSERT INTO categories (name) VALUES
('IPA'),
('Stout'),
('Lager'),
('Pilsner'),
('Ale'),
('Porter'),
('Saison'),
('Wheat Beer'),
('Amber Ale'),
('Pale Ale');

-- Beers Table
INSERT INTO beers (name, description, abv, brewery_id, category_id) VALUES
('Hoppy IPA', 'A bold, hoppy beer with citrus notes.', 6.5, 1, 1),
('Dark Stout', 'A rich stout with chocolate and coffee flavors.', 8.0, 2, 2),
('Golden Lager', 'A crisp and refreshing lager.', 4.5, 3, 3),
('Classic Pilsner', 'A light, malty pilsner with a hint of bitterness.', 5.0, 4, 4),
('Amber Ale', 'A malty amber ale with a caramel finish.', 5.2, 5, 9),
('Citrus Wheat', 'A wheat beer with a zesty orange flavor.', 4.8, 6, 8),
('Strong Porter', 'A robust porter with roasted malt flavors.', 7.5, 7, 6),
('Belgian Saison', 'A fruity and spicy saison with a dry finish.', 6.0, 8, 7),
('Pale Ale', 'A classic pale ale with balanced hops and malt.', 5.5, 9, 10),
('Imperial IPA', 'A strong, hoppy IPA with tropical notes.', 9.0, 10, 1);

-- Reviews Table
INSERT INTO reviews (rating, comment, user_id, beer_id) VALUES
(5, 'Amazing IPA with great flavor!', 1, 1),
(4, 'Rich stout but slightly bitter for my taste.', 2, 2),
(3, 'Good lager, but nothing special.', 3, 3),
(5, 'Perfect pilsner, crisp and refreshing.', 4, 4),
(4, 'Nice caramel flavor in this amber ale.', 5, 5),
(3, 'Citrus flavor is okay, but too light.', 6, 6),
(5, 'Excellent porter with bold flavors.', 7, 7),
(4, 'Saison is fruity and enjoyable.', 8, 8),
(4, 'Solid pale ale with good balance.', 9, 9),
(5, 'Strong and flavorful IPA!', 10, 10);

-- Favorites Table
INSERT INTO favorites (user_id, beer_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(3, 5),
(3, 6),
(4, 7),
(4, 8),
(5, 9),
(5, 10),
(6, 1),
(6, 3),
(7, 2),
(7, 5),
(8, 4),
(8, 6),
(9, 7),
(9, 9),
(10, 8),
(10, 10);

-- Photos Table
INSERT INTO photos (url, beer_id) VALUES
('https://example.com/photos/beer1.jpg', 1),
('https://example.com/photos/beer2.jpg', 2),
('https://example.com/photos/beer3.jpg', 3),
('https://example.com/photos/beer4.jpg', 4),
('https://example.com/photos/beer5.jpg', 5),
('https://example.com/photos/beer6.jpg', 6),
('https://example.com/photos/beer7.jpg', 7),
('https://example.com/photos/beer8.jpg', 8),
('https://example.com/photos/beer9.jpg', 9),
('https://example.com/photos/beer10.jpg', 10);

-- Ingredients Table
INSERT INTO ingredients (name, type, beer_id) VALUES
('Hops', 'Flavoring', 1),
('Citra Hops', 'Flavoring', 1),
('Chocolate Malt', 'Specialty Malt', 2),
('Coffee Beans', 'Adjunct', 2),
('Pilsner Malt', 'Base Malt', 3),
('Saaz Hops', 'Flavoring', 3),
('Barley', 'Base Malt', 4),
('Cascade Hops', 'Flavoring', 4),
('Caramel Malt', 'Specialty Malt', 5),
('Wheat', 'Base Malt', 6),
('Orange Peel', 'Adjunct', 6),
('Roasted Barley', 'Specialty Malt', 7),
('Molasses', 'Adjunct', 7),
('Belgian Yeast', 'Fermentation', 8),
('Coriander', 'Spice', 8),
('Pale Malt', 'Base Malt', 9),
('Centennial Hops', 'Flavoring', 9),
('Tropical Hops', 'Flavoring', 10),
('Sugar', 'Adjunct', 10),
('Simcoe Hops', 'Flavoring', 1),
('Honey Malt', 'Specialty Malt', 2),
('Munich Malt', 'Base Malt', 3),
('Ginger', 'Spice', 4),
('Chinook Hops', 'Flavoring', 5),
('Lactose', 'Adjunct', 6),
('Roasted Coffee', 'Adjunct', 7),
('Cinnamon', 'Spice', 8),
('Flaked Barley', 'Base Malt', 9),
('Mosaic Hops', 'Flavoring', 10);
