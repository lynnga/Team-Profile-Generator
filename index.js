const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require ("./lib/Engineer")
const Intern = require ("./lib/Intern")
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
    createTeam();
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
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "engineerId",
      message: "what is the engineer's id?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "what is the engineer's email?",
    },
    {
      type: "input",
      name: "github",
      message: "what is the engineer's Github?",
    },
  ]);
}
function createIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "internId",
      message: "what is the interns's id?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "what is the interns's email?",
    },
    {
      type: "input",
      name: "school",
      message: "what is the intern's school?",
    },
  ]);
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamMemberChoice",
        message: "which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I have finished my team"],
      },
    ])
    .then((answers) => {
      switch (answers.teamMemberChoice) {
        case "Engineer":
          createEngineer().then((answers) => {
            const { engineerName, engineerId, engineerEmail, github } = answers;
            const engineer = new Engineer(
              engineerName,
              engineerId,
              engineerEmail,
              github
            );
            team.push(engineer);
            createTeam ();
          });
          break;
        case "Intern":
          createIntern().then((answers) => {
            const {internName, internId, internEmail, school} = answers;
            const intern = new Intern(
              internName,
              internId,
              internEmail,
              school
            );
            team.push(intern);
            createTeam ();
          });
          
          break;
        default:
          buildTeam();
      }
    });
}
function createHTML(teamArr) {
  let htmlMain = ` 
  
     
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></script>
      
 

  `
  
  
  teamArr.forEach((teamMember) => {
    if (teamMember.getRole() === "Manager") {
      htmlMain = htmlMain + templates.managerTemplate(teamMember);
    }
    if(teamMember.getRole() ==="Engineer"){
    htmlMain = htmlMain + templates.engineerTemplate(teamMember)
  }
  if(teamMember.getRole() ==="Intern"){
  htmlMain = htmlMain + templates.internTemplate(teamMember)
  }
});
  return htmlMain;
}
function buildTeam() {
  fs.writeFileSync(PATH, createHTML(team), "utf-8");
}

main();
