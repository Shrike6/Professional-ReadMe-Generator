// Needed Packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions array
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'Description',
        message: 'Type a short description of your project.',
    },

    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your Github profile name?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

    {
        type: 'input',
        name: 'Installation',
        message: 'How should dependencies be installed?',
        default: 'npm i',
    },

    {
        type: 'input',
        name: 'Usage',
        message: 'How is your project designed to be used?',
    },

    {
        type: 'list',
        name: 'License',
        message: 'Which license should this project have?',
        choices: ['None', 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
    },

    {
        type: 'input',
        name: 'Contribution',
        message: 'What guidelines should contributors follow?',
    },

    {
        type: 'input',
        name: 'Testing',
        message: 'How should tests be run?',
        default: 'npm test',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
