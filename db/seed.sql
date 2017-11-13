-- Create a users table --
CREATE TABLE IF NOT EXISTS users (
  id SERIAL,
  email varchar,
  password varchar
);

-- Create some dummy users --
INSERT INTO users (email, password) VALUES ('mthurn@live.com', 'password');
INSERT INTO users (email, password) VALUES ('fangorn@hotmail.com', 'password');
INSERT INTO users (email, password) VALUES ('euice@outlook.com', 'password');
INSERT INTO users (email, password) VALUES ('rgarcia@optonline.net', 'password');
INSERT INTO users (email, password) VALUES ('mxiao@yahoo.com', 'password');
INSERT INTO users (email, password) VALUES ('firstpr@att.net', 'password');
INSERT INTO users (email, password) VALUES ('webdragon@comcast.net', 'password');
INSERT INTO users (email, password) VALUES ('jguyer@aol.com', 'password');
INSERT INTO users (email, password) VALUES ('sakusha@yahoo.ca', 'password');
INSERT INTO users (email, password) VALUES ('crandall@sbcglobal.net', 'password');
INSERT INTO users (email, password) VALUES ('drezet@me.com', 'password');
INSERT INTO users (email, password) VALUES ('miyop@icloud.com', 'password');
