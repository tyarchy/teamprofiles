// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

var fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const generateProfile = require("./src/generate-profile.js");


const carl = new Manager("Carl", "carl23Bad@")
const teamProfile = []

//profile input
var question;
var construct;



const loopQuestion = () => {
  inquirer
    .prompt({
      type: "list",
      name: "returnResponse",
      message: "Add another Employee",
      choices: ["yes", "no"]
    })
    .then((newEmployee) => {
      console.log(newEmployee.returnResponse);
      if (newEmployee.returnResponse == "yes") {
        questions()
      } else {
        fs.writeFile('index.html', generateProfile(teamProfile), err => {
          if (err) throw err;

          console.log('oh boy');
        });
      }

    });
}


console.log()
const questions = () => {
  inquirer
    .prompt({
      type: "list",
      name: "peon",
      message: "Employee title:",
      choices: ["Manager", "Engineer", "Intern"],
    })
    .then((roleAns) => {
      console.table(roleAns)
      switch (roleAns.peon) {
        case "Manager":
          question = {
            type: "input",
            name: "roleSpecific",
            message: "Employee office number:",
          };
          construct = Manager;
          break;
        case "Engineer":
          question = {
            type: "input",
            name: "roleSpecific",
            message: "Employee github username:",
          };
          construct = Engineer;
          break;
        case "Intern":
          question = {
            type: "input",
            name: "roleSpecific",
            message: "School attended:",
          };
          construct = Intern;
          break;
      }
      console.log(question);
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "Employee name:",
          },
          {
            type: "input",
            name: "id",
            message: "Employee ID:",
          },
          {
            type: "input",
            name: "email",
            message: "Employee email:",
          },
          question,
        ])
        .then((questions) => {
          var employee = new construct(
            questions.name,
            questions.id,
            questions.email,
            questions.roleSpecific
          );
          teamProfile.push(employee)
          console.log(employee);
          console.log(teamProfile);
          loopQuestion();
          

        });
    });
};

questions()




