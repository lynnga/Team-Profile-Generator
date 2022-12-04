const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

const team = [];
function main() {
  createManager().then(answers =>{
    console.log(answers)
  });
}

function createManager() {
  console.log("let's start building your team");
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "Who is the manager of this team?",
    },
    {
      type: "input",
      name: "managerId",
      message: "what is the manager's id?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "what is the manager's email?",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "what is the manager's office number?",
    },
  ]);
}
function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamMemeberChoice",
        message: "which type of team memeber would you like to add?",
        choices: ["Engineer", "Intern", "I have finished my team"],
      },
    ])
    .then((answers) => {
      switch (answer.teamMemberChoice) {
        case "Engineer":
          break;
        case "Intern":
          break;
        default:
      }
    });
}
function buildTeam() {}
main();
