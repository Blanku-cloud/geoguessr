CREATE DATABASE geogussr;
USE geogussr;

-- email will user defualt id
CREATE TABLE IF NOT EXISTS user_login_info (
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    username VARCHAR(255) NOT NULL,
    user_pass CHAR(60) DEFAULT NULL,
    user_on BOOLEAN NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

-- seeding the user_login_info
INSERT INTO user_login_info
(id, username, user_pass, user_on, created) VALUES (1, 'mecow', '1hashed', TRUE, '2024-08-22 12:00:00'),
(2, 'meoxen', '2hased', FALSE, '2024-10-22 12:00:00'),
(3, 'XuiZhen', '3hased', FALSE, '2024-01-22 12:00:00');

-- connect non-email login method to defauld id from user_login_info
CREATE TABLE IF NOT EXISTS auth_method (
    user_login_info_id INTEGER PRIMARY KEY,
    FOREIGN KEY (user_login_info_id) REFERENCES user_login_info(id) ON DELETE CASCADE,
    facebook_id VARCHAR(255) DEFAULT NULL,
    google_id VARCHAR(255) DEFAULT NULL,
    email_id VARCHAR(255) DEFAULT NULL
);

INSERT INTO auth_method
(user_login_info_id, facebook_id, google_id) VALUES (2, NULL, 123),
(3, 567, NULL);


CREATE TABLE IF NOT EXISTS user_data (
    user_login_info_id INTEGER PRIMARY KEY,
    FOREIGN KEY (user_login_info_id) REFERENCES user_login_info(id) ON DELETE CASCADE,
    exp INTEGER(255) NOT NULL DEFAULT 0,
    coins INTEGER(255) NOT NULL DEFAULT 0
);

-- seeding the user_data
INSERT INTO user_data
(user_login_info_id, exp, coins)
VALUES (1, 100000, 2000000), (2, 0, 0), (3, 50, 10);

-- guest info
CREATE TABLE IF NOT EXISTS guest_login_info (
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    username VARCHAR(255) NOT NULL
);

-- seeding the guest_login_info
INSERT INTO guest_login_info
(id, username)
VALUES (1, 'dragonWater'), (2, 'poppp'), (3, 'bootscat');

CREATE TABLE guest_data (
    guest_login_info_id INTEGER PRIMARY KEY,
    FOREIGN KEY (guest_login_info_id) REFERENCES guest_login_info(id) ON DELETE CASCADE,
    exp INTEGER(255) DEFAULT NULL,
    coins INTEGER(255) DEFAULT NULL
);

-- seeding the guest_data
INSERT INTO guest_data
(guest_login_info_id)
VALUES (1), (2), (3);
