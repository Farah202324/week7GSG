const connection = require("../config/connection");

const postUserData = (user) => {
  const { name, email, password } = user;
  const userSql = {
    text: "INSERT INTO users(name,email,password) VALUES($1, $2,$3) returning name,email,password",
    values: [name, email, password],
  };
  return connection.query(userSql);
};

const postTaskData = (task) => {
  const { title, desc, deadline } = task;
  const taskSql = {
    text: "INSERT INTO tasks(title,desc,deadline) VALUES($1, $2,$3) returning title,desc,deadline",
    values: [title, desc, deadline],
  };

  return connection.query(taskSql);
};

const postProjectData = (task) => {
  const { projectName, projectDesc } = project;
  const projectSql = {
    text: "INSERT INTO tasks(projectName,projectDesc) VALUES($1, $2) returning projectName,projectDesc",
    values: [projectName, projectDesc],
  };
  return connection.query(projectSql);
};

module.exports = { postUserData, postTaskData, postProjectData };
