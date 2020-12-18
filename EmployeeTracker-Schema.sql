DROP DATABASE IF EXISTS employee_trackingDB;
CREATE database employee_trackingDB;

USE employee_trackingDB;

CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY(id)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,4) NULL,
  department_id INT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
 id INT AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name DECIMAL(10,4) NULL,
  role_id INT NULL,
  manager_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE CASCADE,
  FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE CASCADE
);


