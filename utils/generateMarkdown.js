function getUrl(GH, title, link) {
  //const gHstyleURL = title.toLowerCase().split(' ').join('-');
  return `https://github.com/${GH}/${link}`;
}

//helper funciton to get the badge and its color via a link (no ajax call is needed for this)
function getBadge(license, GH, title, color, link) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-${color}.svg)](${getUrl(
      GH,
      title,
      link
    )})`;
  } else {
    return ``;
  }
}
//this is a helper function to get license(if selected none the section in markdown will be blank)
function getLicense(license) {
  if (license !== "None") {
    return `
  ## License
  License is ${license} standard license.`;
  } else {
    return ``;
  }
}

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
  }](https://github.com/jakevs/) directly at ${data.email}.`;
}

module.exports = generateMarkdown;
