const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, "Manager")
        this.office = office;
    }
    getOffice() {
        return this.office
    }

}
// const carl = new Manager("carl", "7", "carl2bad@gmail.com", "911")
// // const henry = new Manager("henry", "7", "carl2bad@gmail.com", "911")
// // const sarah = new Manager("sarah", "7", "carl2bad@gmail.com", "911")
// console.log(carl.getOffice())
module.exports = Manager;