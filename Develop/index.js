// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

const fileName = process.argv[2];

// TODO: Create an array of questions for user input
// const questions = []
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide install instructions for the project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Pick a license.',
        choices: ['MIT', 'Apache'],
    },
    {
        type: 'input',
        name: 'username',
        message: ['What is the github username?'],
    },
    {
        type: 'input',
        name: 'email',
        message: ['What is the email address?'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, answer) {
    if (answer) {
        let rmTemplate = fs.readFileSync("READMETEMPLATE.md", "utf8");
        const email = answer.email;
        const username = answer.username;
        const license = answer.license;

        rmTemplate = rmTemplate.replace("{title}", answer.title);
        rmTemplate = rmTemplate.replace("{description}", answer.description);
        rmTemplate = rmTemplate.replace("{installation}", answer.install);
        rmTemplate = rmTemplate.replace("{usage}", answer.usage);
        rmTemplate = rmTemplate.replace("{contribution}", answer.contribution);
        rmTemplate = rmTemplate.replace("{testing}", answer.test);
        rmTemplate = rmTemplate.replace("{license}", displayLicense(license));
        rmTemplate = rmTemplate.replace("{badge}", displayLicenseBadge(license));
        rmTemplate = rmTemplate.replace("{github}", displayGithubProfile(username));
        rmTemplate = rmTemplate.replace("{email}", displayEmail(email));

        fs.writeFileSync(fileName, rmTemplate);

        console.log('README File created!')
    }
};

//function to display license 
function displayLicense(license) {
    var licenseInfo = `This project is licensed under ${license}\n\n`;

    return licenseInfo;
};

// display license badge
function displayLicenseBadge(license) {
    var licenseBadge = "";
    switch (license) {
        case "MIT":
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "Apache":
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        default:
            licenseBadge = "Badge Unavailable";
    }
    return licenseBadge;
};

// function to display github profile
function displayGithubProfile(github) {
    var githubProfile = `[View my Github Profile](https://github.com/${github})`;

    return githubProfile;
};

// function to display email
function displayEmail(email) {
    var emailContent = `Questions? Contact Me! [${email}](mailto:${email})`;
    return emailContent;
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
            questions
        )
        .then((response) =>
            writeToFile(fileName, response)
        );
};

// Function call to initialize app
init();