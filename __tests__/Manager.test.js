const Manager = require('..lib/Manager');

test('creates an Employee object', () => {
    const Manager = new Manager('Joe', 'id', 'email');

    expect(Manager.employeeName).toBe(this.employeeName);
    expect(Manager.id).toBe(this.id);
    expect(Manager.email).toBe(this.email);
});