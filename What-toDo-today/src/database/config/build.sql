BEGIN;

DROP TABLE IF EXISTS users, todo CASCADE;

CREATE TABLE users (
  id SERIAL  PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(200) unique,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE todo (
  id SERIAL  PRIMARY KEY,
  note TEXT NOT NULL,
  date date ,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);


COMMIT;