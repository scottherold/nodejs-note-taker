// *** MODULES *** //
// ** npm modules ** //
const yargs = require('yargs'); // command line parsing

// ** Unique modules **//
const notes = require('./notes'); // notes utilities

// *** YARGS SETUP *** //
// Customize yargs version
yargs.version('1.1.0'); // sets current app version

// ** YARGS Functions ** //
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
    handler(argv) {
        notes.addNote(argv.title, argv.body); // calls the addNote function from the notes utility file
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title); // calls the removeNote function from the notes utility file
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes(); // Lists all the notes
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title); // calls the readNote function from the notes utility
    }
});

// ** ENTRY POINT ** //
// runs yargs with command provided in CLI
yargs.parse();