const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");

const templates = require("./src/templates");
const DIST = path.resolve(__dirname, "dist");
const PATH = path.join(DIST, "team.html");

const team = [];
function main() {
  createManager().then((answers) => {
    const { managerName, managerId, managerEmail, managerOfficeNumber } =
      answers;
    const manager = new Manager(
      managerName,
      managerId,
      managerEmail,
      managerOfficeNumber
    );
    team.push(manager);
    createTeam()
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

function createEngineer() {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer\'s name?"
    },
    {
      type: "input",
      name: "engineerId",
      message: "what is the engineer\'s id?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "what is the engineer\'s email?",
    },
    {
      type: "input",
      name: "github",
      message: "what is the engineer\'s Github?",
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
      switch (answers.teamMemberChoice) {
        case "Engineer":
          createEngineer().then(answers =>
            {console.log('test')
          })
          break;
        case "Intern":
          break;
        default:
          buildTeam();
      }
    });
}
function createHTML(teamArr) {
  let htmlMain = ``;
  teamArr.forEach(teamMember => {
    if (teamMember.getRole() === "Manager") {
      htmlMain = htmlMain + templates.managerTemplate(teamMember);
    }

    
  });
  return htmlMain
}
function buildTeam() {
  fs.writeFileSync(PATH, createHTML(team), 'utf-8');
}

main();
