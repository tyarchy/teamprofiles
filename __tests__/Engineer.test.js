
const Engineer = require('../lib/engineer');

test('creates an Employee object', () => {
    const Engineer = new Engineer('bob', '1', 'email', '1', 'github');

    expect(Engineer.employeeName).toBe(this.employeeName);
    expect(Engineer.id).toBe(this.id);
    expect(Engineer.email).toBe(this.email);
    expect(Engineer.office).toBe(this.office);
    expect(Engineer.github).toBe(this.github);
});