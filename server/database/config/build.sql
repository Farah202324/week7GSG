BEGIN;

DROP TABLE IF EXISTS users,tasks,projects CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(256) NOT NULL,
  email VARCHAR(256) NOT NULL,
  password VARCHAR(256) NOT NULL
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  projectName VARCHAR(256) NOT NULL,
  projectDesc TEXT NOT NULL 
);



CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(256) NOT NULL ,
  description TEXT NOT NULL,
  created_at TIMESTAMP  NOT NULL DEFAULT NOW(),
  deadline VARCHAR(256) NOT NULL,
  assigned_to INTEGER REFERENCES users(id),
  project_id INTEGER REFERENCES projects(id)

);




COMMIT;
