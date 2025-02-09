// TODO: Include packages needed for this application
import questions from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
// const questions = []
questions
    .prompt([
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
            name: 'install-instructions',
            message: 'Please provide install instructions for the project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information.',
        },
        {
            type: 'input',
            name: 'contribution-guidelines',
            message: 'What are the contribution guidelines?',
        },
        {
            type: 'input',
            name: 'test-instructions',
            message: 'Please provide test instructions',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Pick a license.',
            choices: ['MIT', 'Apache', 'GNU GPLv3'],
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
    ])
    .then((responses) => {
        console.log('responses :>> ', responses);
        // TODO: Create a function to write README file
        fs.writeFile('README.md', JSON.stringify(responses, null, 2), (err) => err ? console.error(err) : console.log('Answers logged to README file'))
    });

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();
