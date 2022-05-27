const Employee = require('../lib/Employee');



test('employee mega object', () => {
  const employee = new Employee('BillyBob', 1, 'email');
  
  expect(employee.name) .toEqual(expect.any(String));
  expect(employee.id) .toEqual(expect.any(String));
  expect(employee.email) .toEqual(expect.any(String));
  
});

test('get name', () =>{
  const employee = new Employee('BillyBob', 1, 'email', );
  expect(employee.name) .toEqual(expect.any(String));
});

test('get id', () =>{
  const employee = new Employee('BillyBob', 1, 'email', );
  expect(employee.id) .toEqual(expect.any(Number));
});

test('get id', () =>{
  const employee = new Employee('BillyBob', 1, 'email', );
  expect(employee.email) .toEqual(expect.any(String));
});



// gets role () 
test('gets role of employee', () => {
  const employee = new Employee('BillyBob', 1, 'email', );

  expect(employee.getRole()).toEqual("roleSpecific");
});
