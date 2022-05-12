const Employee = require("./Employee")

class Intern extends Employee {
    constructor(argName, argId, argEmail, argSchool) {
        super (argName, argId, argEmail, "Intern")
        this.school = argSchool;

    }
    getSchool() {
        return this.school
    }

}
// const greenPig = new Intern("8")
module.exports = Intern;