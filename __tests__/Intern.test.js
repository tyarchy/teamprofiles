const Intern = require('../lib/Intern');

test('creates an Employee object', () => {
    const Intern = new Intern('bob', 'id', 'email', 'school');

    expect(Intern.name).toBe(this.name);
    expect(Intern.id).toBe(this.id);
    expect(Intern.email).toBe(this.email);
    expect(Intern.school).toBe(this.school);
});


