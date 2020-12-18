INSERT INTO department(name)
VALUES ('Retail Banking'), ('Call Center'), ('Business Development'), ('Digital Banking'); 

INSERT INTO role (title, salary, department_id)
VALUES ('Operations Manager', 95000, 1),
('Chief Retail Officer', 200000, 1),
('Training Officer', 65000, 2),
('Deposit Product Specialist', 55000, 1) 
('Telephone Center Manager', 95000, 2), 
('Compliance Manager', 85000, 2),
('Business Development Officer', 65000, 3),
('Business Ops Specialist', 55000, 3),
('Online Banking Specialist', 60000, 4), 
('Business Online Specialist', 60000, 4),
('Mobile Banking Admin', 60000, 4), 
('Core Banking Solutions Manager', 85000, 4), 
('Customer Service Rep', 45000, 1), 
('Branch Manager', 75000, 1), 
('Telephone Banking Specialist', 55000, 2), 
('Systems Analyst', 75000, 4), 
('Full Stack Developer', 125000, 4);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES ('Ann', 'Perkins', 1, 2),
(1223, 'Ron','Swanson', 6, 12),
('April','Ludgate', 11, NULL),
('Ben', 'Wyatt', 1, NULL), 
('Andy, Dwyer', 3, NULL), 
('Chris', 'Traeger', 17, NULL), 
('Mouse', 'Rat', 17, NULL), 
('Tom', 'Haverford', 13, NULL),
('Mark', 'Brendanawicz', 11 , 12)


