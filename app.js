// MODULES //
// npm modules
const chalk = require('chalk'); // colored console text
const yargs = require('yargs'); // command line parsing
// Unique modules
const notes = require('./notes'); // notes utilities

// YARGS SETUP //
// Customize yargs version
yargs.version('1.1.0'); // sets current app version

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
        notes.addNote(argv.title, argv.body); // calls the addNote function from teh notes utility file
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
// runs yargs with command provided in CLI
yargs.parse();