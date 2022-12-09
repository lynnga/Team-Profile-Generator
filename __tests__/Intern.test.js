const Intern = require("../lib/Intern");

test("can create a new intern object", () => {
  const intern = new Intern();
  expect(typeof intern).toBe("object");
});

test("can set name in intern object", () => {
  const intern = new Intern("Lin");
  expect(intern.name).toBe("Lin");
});

test("can set employee_id in intern object", () => {
  const intern = new Intern("Lin", 30);
  expect(intern.employee_id).toBe(30);
});

test("can set email in intern object", () => {
  const intern = new Intern("Lin", 30, "lingamliel@gmail.com");
  expect(intern.email).toBe("lingamliel@gmail.com");
});

test("can set school in intern object", () => {
  const intern = new Intern("Lin", 30, "lingamliel@gmail.com","smu");
  expect(intern.school).toBe("smu");
});

test('can get name from getName() method', () =>{
const intern = new Intern("Lin", 30, "lingamliel@gmail.com");
expect(intern.getName()).toBe("Lin");
});

test("can get employee_id()method", () => {
  const intern = new Intern("Lin", 30);
  expect(intern.employee_id).toBe(30);
});

test("can get email()method", () => {
  const intern = new Intern("Lin", 30, "lingamliel@gmail.com");
  expect(intern.email).toBe("lingamliel@gmail.com");
});