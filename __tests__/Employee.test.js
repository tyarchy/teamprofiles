const Employee = require('../lib/employee.js');

test('creates an Employee object', () => {
    const Employee = new Employee('bob', 'id', 'email');

    expect(Employee.name).toBe(this.name);
    expect(Employee.id).toBe(this.id);
    expect(Employee.email).toBe(this.email);
    expect(Employee.role).toBe(this.roll);
});


