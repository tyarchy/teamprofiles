const Engineer = require('../lib/Engineer');

test('creates Engineer', () => {
    const engineer = new Engineer('Bob' , 2, "bob@gmail.com", "bobbyboy");
  
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github', () => {
    const engineer = new Engineer('Bob' , 2, "bob@gmail.com", "bobbyboy");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});



 