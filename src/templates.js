const engineerTemplate = (engineer) => {
  const name = engineer.name;
  const id = engineer.employee_id;
  const email = engineer.email;
  const role = engineer.getRole();
  const github = engineer.getGithub();

  return `
  
  <div class="card" style="width: 18rem; margin:auto">
  <div class="card-body">
  <h5 class="card-title">${role.toUpperCase()}</h5> 
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name:${name}</li>
    <li class="list-group-item">Email:${email}</li>
    <li class="list-group-item">ID:${id}</li>
    <li class="list-group-item">Github:${github}</li>
  </ul>
    `;
};

const managerTemplate = (manager) => {
  const name = manager.name;
  const id = manager.employee_id;
  const email = manager.email;
  const officeNumber = manager.getOfficeNumber();
  const role = manager.getRole();

  return `

  <div class="card" style="width: 18rem; margin:auto">
  <div class="card-body">
 
  <h5 class="card-title">${role.toUpperCase()}</h5> 
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name:${name}</li>
    <li class="list-group-item">Email:${email}</li>
    <li class="list-group-item">ID:${id}</li>
    <li class="list-group-item">OfficeNumber:${officeNumber}</li>
  </ul>
`
};
const internTemplate = (intern) => {
  const name = intern.name;
  const id = intern.employee_id;
  const email = intern.email;
  const role = intern.getRole();
  const school = intern.getSchool();

  return `
  <div class="card" style="width: 18rem; margin: auto;">
  <div class="card-body">
  <h5 class="card-title">${role.toUpperCase()}</h5><i class="material-icons"></i>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${name}</li>
    <li class="list-group-item">${email}</li>
    <li class="list-group-item">${id}</li>
    <li class="list-group-item">${school}</li>
  </ul>
  `;
};

module.exports = { engineerTemplate, managerTemplate, internTemplate };
