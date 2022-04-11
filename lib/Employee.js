class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}
// var vin = new Employee("Vin", 17, "vinWins@gmail.com");
// var harry = new Employee("Harry", 12, "email@email.com");
// console.table(harry.getName());

module.exports = Employee;
