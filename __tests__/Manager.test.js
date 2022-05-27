const Manager = require('../lib/Manager');


test('manager object', () => {
    const manager = new Manager('BillyBob', 1, 'email', 'office');
    
    expect(manager.office) .toEqual(expect.any(Number));
});

// the office
test('manager office', () => {
    const manager = new Manager('BillyBob', 1, 'email', 'office');

    expect(manager.office()).toEqual(expect.stringContaining(manager.office.toString()));
});

// gets role 
test('gets role of employee', () => {
    const manager = new Manager('BillyBob', 90, 'email', 'office');

    expect(manager.getRole()).toEqual("Manager");
});