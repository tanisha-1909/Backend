CREATE TABLE user(
    id varchar(50) PRIMARY KEY,
    username varchar(50) unique,
    email varchar(50) unique not null,
    password varchar(50) not null 
);

SHOW TABLES;

SELECT * FROM user;



-- +-----+--------------+-------------+----------+
-- | id  | username     | email       | password |
-- +-----+--------------+-------------+----------+
-- | 123 | 123_newuser  | abc@gmail   | abc      |
-- | 124 | 124_newuser  | sd@gmail    | sd       |
-- | 125 | 1245_newuser | absac@gmail | axsbc    |
-- +-----+--------------+-------------+----------+