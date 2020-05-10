const fs = require("fs");
const filePath = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const input = [
  {
    type: "input",
    name: "GH",
    message: "What is your GitHub username?",
    default: "jakevs",
  },
  {
    type: "input",
    name: "fName",
    message: "What is the name for your .md file?",
    default: "README",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
    default: "jakevs3@gmail.com",
    validate: validateEmail,
  },
  {
    type: "input",
    name: "URL",
    message: "The URL to your project?",
    default: "https://jakevs.github.io/readmegenerator/",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
    default: "ReadMe Generator - created with node!",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
    default: "This application was developed to automate a readme file.",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "list",
    name: "color",
    message: "What's your favorite color?",
    choices: ["red", "green", "purple", "black", "magenta"],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to test?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
    default: "It is an open project and everyone can contribute!",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
    default: "Please send an email if you wish to contribute.",
  },
];

function createReadMe(name, data) {
  return fs.writeFileSync(filePath.join(process.cwd(), name), data);
}
function letsGo() {
  inquirer
    .prompt(input)
    .then((responses) =>
      createReadMe(`${responses.fName}.md`, generateMarkdown(responses))
    );
}
letsGo();
