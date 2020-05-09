// function generateMarkdown(data) {
//   return `
//   # ${data.title}

//   `;
// }

// module.exports = generateMarkdown;

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${getBadge(data.license, data.GH, data.title, data.color, data.URL)}
  ## Description
  ${data.description}
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`
  ## Usage
  ${data.usage}
  ${getLicense(data.license)}
      
  ## Contributing
  ${data.contributing}
  ## Tests
  To run tests, run the following command:
  \`\`\`
  ${data.test}
  \`\`\`
  ## Questions
  If you have any questions about the repo, open an issue or contact [${
    data.GH
  }](https://github.com/iampopov/) directly at ${data.email}.`;
}

module.exports = generateMarkdown;
