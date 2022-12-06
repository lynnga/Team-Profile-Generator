const engineerTemplate = (engineer) => {
 
    const name = engineer.name;
    const id = engineer.employee_id;
    const email = engineer.email;
    const role = engineer.getRole();
    const github = engineer.getGithub();

    return `
  <h2>${role.toUpperCase()}</h2>
    <div>Name: ${name}</div>
    <div>Email: ${email}/<div>
    <div>Employee ID: ${id}</div>
    <div> Github: ${github}</div>
    `;
  };

const managerTemplate = (manager) => {
  const name = manager.name;
  const id = manager.employee_id;
  const email = manager.email;
  const officeNumber = manager.getOfficeNumber();
  const role = manager.getRole();

  return `
  <h2>${role.toUpperCase()}</h2>
    <div>Name: ${name}</div>
    <div>Email: ${email}/<div>
    <div>Employee ID: ${id}</div>
    <div> Office Number: ${officeNumber}</div>
    `;
};

module.exports = { engineerTemplate, managerTemplate };
