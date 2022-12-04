const inquirer = require("inquirer");

function main() {
  createManager();
}
function createManager() {
  console.log("let's start building your team");
  inquirer
    .promt([
      {
        type: 'input',
        name: 'name',
        message: 'Who is the manager of this team?', 
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'what is the manager\'s id?',
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'what is the manager\'s email?',
      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'what is the manager\'s office number?',
      },
    ])
    .then(answers => {
      console.log(answers);
    })
}
main()
