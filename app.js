// MODULES //
// npm modules
const chalk = require('chalk'); // colored console text
const yargs = require('yargs'); // command line parsing
// Unique modules
const getNotes = require('./notes');

// yargs SETUP //
// Customize yargs version
yargs.version('1.1.0'); // sets current app version

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => {
        console.log('Adding a new note!');
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing the note...')
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        console.log('Listing all notes...')
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('Reading the note...')
    }
});

// LOGIC //
console.log(yargs.argv);