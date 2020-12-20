// Initializes the npm packages used
const mysql = require("mysql");
const inquirer = require("inquirer");
const { type } = require("os");

// Initializes the connection variable to sync with a MySQL database
const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "rootroot1",
  database: "employee_trackingdb",
// JSG Completed the connection to the DB 

});

connection.connect(function(err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId + "\n");
    runPrompt();
    //readEmplyTrkDept();
    //readEmplyTrkEmply();
    //readEmplyTrkRole();
  });

 

  function runPrompt(){
      inquirer
        .prompt([
            {
                type: "list",
                name: "commandLineApp",
                message: "Please select from the view or add options below to run your CMS",
                choices: [
                    "View Report for Employees", 
                    "View Report for Roles", 
                    "View Report for Department",
                    "Add Department",
                    "Add Employee",
                    "Add Roles",  
                ]
            }
        ])
        .then(selection => {
          if (selection.commandLineApp === "View Report for Employees") {
            //console.log ("here is your department report")
            readEmplyTrkData();
        
            function readEmplyTrkData() {
            connection.query("SELECT * FROM employee", function(err, res) {
                if (err) throw err;
                // Log all results of the SELECT statement
                //console.log(res);
                console.log('\n')
                console.table(res);
                //connection.end();
                });
        
            }
            return runPrompt();
    }
            if (selection.commandLineApp === "View Report for Roles") {
                //console.log ("here is your department report")
                readEmplyTrkData();
            
                function readEmplyTrkData() {
                connection.query("SELECT * FROM role", function(err, res) {
                    if (err) throw err;
                    // Log all results of the SELECT statement
                    //console.log(res);
                    console.log('\n')
                    console.table(res);
                    //connection.end();
                    });
                }
                return runPrompt();
            }

            if (selection.commandLineApp === "View Report for Department") {
                //console.log ("here is your department report")
                readEmplyTrkData();
            
                function readEmplyTrkData() {
                connection.query("SELECT * FROM department", function(err, res) {
                    if (err) throw err;
                    // Log all results of the SELECT statement
                    //console.log(res);
                    console.log('\n')
                    console.table(res);
                    //connection.end();
                    });
                }
                return runPrompt();
            }
  })
  
 
 
  /*function readEmplyTrkEmply() {
    connection.query("SELECT * FROM employee", function(err, res) {
        if (err) throw err;
    
        // Log all results of the SELECT statement
        console.table(res);
        //connection.end();
      });

  }
  function readEmplyTrkRole() {
    connection.query("SELECT * FROM role", function(err, res) {
        if (err) throw err;
    
        // Log all results of the SELECT statement
        console.table(res);
        //connection.end();
      });

    }*/
}
