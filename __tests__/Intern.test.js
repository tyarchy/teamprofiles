const Intern = require('../lib/Intern');

test('creates an Employee object', () => {
    const Intern = new Intern('bob', 'id', 'email', 'school');

    expect(Intern.employeeName).toBe(this.employeeName);
    expect(Intern.id).toBe(this.id);
    expect(Intern.email).toBe(this.email);
    expect(Intern.email).toBe(this.school);
});