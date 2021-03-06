# Employee-Tracker-MySQL-HW12
This solution is an interface that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems.

## Demo
![HW12  Emply Tracker_MySQL_Demo](https://user-images.githubusercontent.com/30843888/102704645-38091880-424c-11eb-8eac-a259601d6c7d.gif)
![HW12  Emply Tracker_Terminal_Demo](https://user-images.githubusercontent.com/30843888/102704654-553de700-424c-11eb-8a4b-7209b4f9b011.gif)

## Repo
![Repo](https://github.com/JGilb28-7/Employee-Tracker-MySQL-HW12.git)

## List of Resources used for Project
1. class activity TwoTable used as ref. for creating the multiple tables 
2. class activity songs 5000 used as ref. to setup the .js
3. Via GOOGLE - {MySQL - Reference ID}: https://stackoverflow.com/questions/2192280/how-to-use-the-keyword-references-in-mysql - used to create the *** int to hold ref. as outline in README for the Role and the Manager id - used exmaple 8. - The references keyword is used to define which table and column is used in a foreign key relationship. This means that a record in the hobby table must have a person_id that exists in the person table or else at the time of insert you will receive an error that the key does not exist.

To answer your question above about what "ON DELETE CASCADE" does, it allows you to delete a parent key record (in person) and it's corresponding children records (in hobby) without having to delete all the children records first.

To clarify, if you have children records attached to a primary key entry and you attempt to delete the primary key entry. -- 

REFERENCES means that the Foreign key corresponds to the primary key of the other table

ON DELETE CASCADE means that if this key is deleted, it will delete values on all the other tables with this key - did not use.. 
4. https://www.w3schools.com/sql/sql_quickref.asp
5. bamazon activity in class on 12.17.2020
6. 

### Task List for Project
- [x] Installs - **completed 12/17/2020
    - [x] inquirer
    - [x] mysql
    - [x] nodemon 
- [x] Create a proper format for the file layout - **completed 12/17/2020
    - [x] controller, public, routes, index.js
    - [x] seed.sql used to populate the database
- [x] Database schema 
-   [x] 1. department
-   [x] 2. role
-   [x] 3. employee
-   [x] 4. test conection to the DB - **12.18.2020 complete $ node employeeTracker.js connected as id 29
- [/] Command Line Application complete the following for the schema list above
-   [x] 1. view
-    [x] a. view employees
-    [x] b. view department
-    [x] c. view role
-   [] 2. add
-   [] 3. update
- [NA] Bonus* if your able to 
-   [] update employee manager
-   [] view employee by manager
-   [] delete - dept, roles, and employees
- [] total budget of a dept - combined salaries
- [] Other Items
-   [x] Change Password for the SQL DB

### commands & use: 
1. use Node employeeTracker.js in terminal
2. MySql NPM Package
3. InquirerJs NPM Package
4. use console.table
5. seperate files for functions
6. SQL Join

### Intial Commit 12/17/2020S
1. created the file layout
2. complete the npm install for inquirer, & mysql
3. loaded the gitignore
