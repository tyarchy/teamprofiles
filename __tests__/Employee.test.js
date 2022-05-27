const Employee = require('../lib/Employee');

describe("Getters", () => {
    const name = "biff";
    const id = 33;
    const email = "peter.gibbons@initech.com";
    const role = "Employee";
  
    const testEmployee = new Employee(name, id, email);
  
    it("Should return the Employee name when requested", () => {
      expect(testEmployee.getName()).toBe(name);
    });
  
    it("Should return the Employee id when requested", () => {
      expect(testEmployee.getId()).toBe(id);
    });
  
    it("Should return the Employee email when requested", () => {
      expect(testEmployee.getEmail()).toBe(email);
    });
  
    it("Should return the Employee role when requested", () => {
      expect(testEmployee.getRole()).toBe(role);
    });
  });

