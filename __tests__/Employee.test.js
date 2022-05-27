const Employee = require('../lib/Employee');



test('employee mega object', () => {
  const employee = new Engineer('BillyBob', 1, 'email');
  
  expect(employee.name) .toEqual(expect.any(String));
});



// gets role from getRole() 
test('gets role of employee', () => {
  const employee = new Employee('BillyBob', 90, 'email', 'github');

  expect(employee.getRole()).toEqual("Engineer");
});
