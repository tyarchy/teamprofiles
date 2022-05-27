
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");



function generateTeam(employees) {
    let managerInfo = ``
    let engineerInfo = ``
    let internInfo = ``
    const templateArray = employees.forEach(element => {
        // manager
        if (element.getRole() == "Manager") {
            managerInfo += `
            <div class=col>
            <div class="card-body">             
              <h3 class="card-text">${element.name} <br>${element.getRole()} <br>${element.office} <br>${element.id} </h3>
              <a href="mailto: ${element.email}" id="email" class="btn btn-primary">Send an email</a>
            </div>
            </div>
            `

            //engineer
        } if (element.getRole() == "Engineer") {
            engineerInfo += `
            <div class=col>
            <div class="card-body">
            <h3 class="card-text">${element.name} <br>${element.getRole()} <br>${element.id} <br>${element.github} </h3>
              <a href="https://github.com/${element.github}" id="github" class="btn btn-primary">Go to github</a>
              <a href="mailto: ${element.email}" id="email" class="btn btn-primary">Send an email</a>
            </div>
            </div>
            `
        } if (element.getRole() == "Intern") {
            internInfo += `
            <div class=col>
            <div class="card-body">             
              <h3 class="card-text">${element.name} <br>${element.getRole()} <br>${element.school} <br>${element.id} </h3>
              <a href="mailto: ${element.email}" id="email" class="btn btn-primary">Send an email</a>
            </div>
            </div>
            `
        }
    });
    return managerInfo + engineerInfo + internInfo;
}

const generateProfile = templateArray => {

    return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
    <div class="d-flex justify-content-center bg-danger" id="banner">
        <h1 class="text-light">Team Profiles</h1>
    </div>
    <div class="container">
        <div class=row>

            <!-- cards go here -->
            ${generateTeam(templateArray)}
            <div class="card m-4" id="cardHome" style="width: 18rem;">
            
        </div>
    </div>
</body>
    </html>
                    `
};









module.exports = generateProfile;






