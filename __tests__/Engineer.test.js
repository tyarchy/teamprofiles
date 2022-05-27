
const Engineer = require('../lib/engineer');



test('creates an Engineer object', () => {
    const engineer = new Engineer('Bob', 1, 'email', 'github');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github
test('gets engineer github value', () => {
    const engineer = new Engineer('Bob', 1, 'email', 'github');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role 
test('gets role of employee', () => {
    const engineer = new Engineer('Bob', 1, 'email', 'github');

    expect(engineer.getRole()).toEqual("Engineer");
});

