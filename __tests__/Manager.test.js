const Manager = require("../lib/Manager");

test("can create a new manager object", () => {
  const manager = new Manager();
  expect(typeof manager).toBe("object");
});

test("can set name in manager object", () => {
  const manager = new Manager("Lin");
  expect(manager.name).toBe("Lin");
});

test("can set employee_id in manager object", () => {
  const manager = new Manager("Lin", 30);
  expect(manager.employee_id).toBe(30);
});

test("can set email in manager object", () => {
  const manager = new Manager("Lin", 30, "lingamliel@gmail.com");
  expect(manager.email).toBe("lingamliel@gmail.com");
});
test("can set number in manager object", () => {
    const manager = new Manager("Lin", 30, "lingamliel@gmail.com","214");
    expect(manager.officeNumber).toBe("214");
  });

test('can get name from getName() method', () =>{
const manager = new Manager("Lin", 30, "lingamliel@gmail.com");
expect(manager.getName()).toBe("Lin");
});

test("can get employee_id()method", () => {
  const manager= new Manager("Lin", 30);
  expect(manager.employee_id).toBe(30);
});

test("can get email()method", () => {
  const manager = new Manager("Lin", 30, "lingamliel@gmail.com");
  expect(manager.email).toBe("lingamliel@gmail.com");
});