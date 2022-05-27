
const Engineer = require('../lib/engineer');

test('employee object', () => {
    const Engineer = new Engineer('bob', '1', 'email', '1', 'github');

    expect(Engineer.name).toBe(this.name);
    expect(Engineer.id).toBe(this.id);
    expect(Engineer.email).toBe(this.email);
    expect(Engineer.github).toBe(this.github);
});

test('engineer object', () => {
    const engineer = new Engineer('BillyBob', 1, 'email', 'github');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('engineer github', () => {
    const engineer = new Engineer('BillyBob', 1, 'email', 'github');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('BillyBob', 90, 'email', 'github');

    expect(engineer.getRole()).toEqual("Engineer");
});

