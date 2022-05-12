const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, "Engineer");
    this.github = github;
  }

  //return object monikers

  getGithub() {
    return this.github;
  }
}



module.exports = Engineer;