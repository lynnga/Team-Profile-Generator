const Engineer = require("../lib/Engineer");

test("can create a new employee object", () => {
  const engineer = new Engineer();
  expect(typeof engineer).toBe("object");
});

test("can set name in engineer object", () => {
  const engineer = new Engineer("Lin");
  expect(engineer.name).toBe("Lin");
});

test("can set employee_id in engineer object", () => {
  const engineer = new Engineer("Lin", 30);
  expect(engineer.employee_id).toBe(30);
});

test("can set email in engineer object", () => {
  const engineer = new Engineer("Lin", 30, "lingamliel@gmail.com");
  expect(engineer.email).toBe("lingamliel@gmail.com");
});
test("can set github in engineer object", () => {
    const engineer = new Engineer("Lin", 30, "lingamliel@gmail.com", "lynnga");
    expect(engineer.github).toBe("lynnga");
  });
  

test('can get name from getName() method', () =>{
const engineer = new Engineer("Lin", 30, "lingamliel@gmail.com");
expect(engineer.getName()).toBe("Lin");
});

test("can get employee_id()method", () => {
  const engineer = new Engineer("Lin", 30);
  expect(engineer.employee_id).toBe(30);
});

test("can get email()method", () => {
  const engineer = new Engineer("Lin", 30, "lingamliel@gmail.com");
  expect(engineer.email).toBe("lingamliel@gmail.com");
});