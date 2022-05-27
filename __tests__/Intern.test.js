const Intern = require('../lib/Intern');


test('intern object', () => {
    const intern = new Manager('BillyBob', 1, 'email', 'school');
    
    expect(intern.school) .toEqual(expect.any(String));
});


// gets role from getRole() 
test('gets role of employee', () => {
    constintern = new Intern('BillyBob', 1, 'email', 'school');

    expect(intern.getRole()).toEqual("Intern");
});
