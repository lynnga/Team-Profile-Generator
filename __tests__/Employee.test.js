const Employee = require("../lib/Employee");

test("can create a new employee object", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("can set name in employee object", () => {
  const employee = new Employee("Lin");
  expect(employee.name).toBe("Lin");
});

test("can set employee_id in employee object", () => {
  const employee = new Employee("Lin", 30);
  expect(employee.employee_id).toBe(30);
});

test("can set email in employee object", () => {
  const employee = new Employee("Lin", 30, "lingamliel@gmail.com");
  expect(employee.email).toBe("lingamliel@gmail.com");
});

test('can get name from getName() method', () =>{
const employee = new Employee("Lin", 30, "lingamliel@gmail.com");
expect(employee.getName()).toBe("Lin");
});