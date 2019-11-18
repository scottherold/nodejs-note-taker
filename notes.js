// *** UTILITIES FOR APPLICATION *** //

// *** MODULES *** //
// ** Global modules **
const fs = require('fs'); // file system

// ** npm modules **
const chalk = require('chalk'); // colored console text

// *** VARIABLES *** //
// Chalk Variables
const successFont = chalk.bold.green.inverse;
const errorFont = chalk.bold.red.inverse; 
const titleFont = chalk.bold.yellow;

// *** FUNCTIONS ***//
// ** General Functions ** //
const loadNotes = () => {
    // If any code within the try block throws an error, it will stop running and return the error in the catch block
    try {
        const dataBuffer = fs.readFileSync('notes.json'); // grab buffer (binary) data
        const dataJson = dataBuffer.toString(); // convert buffer data to JSON string
        return JSON.parse(dataJson); // convert and return JSON string to JS object for editting.
    } catch (err) {
        return []; // if not data, create an empty array to add data
    }
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes); // saves new array as a JSON string
    fs.writeFileSync('notes.json', dataJSON); // creates (if file isnot present) or overwrites the notes.json file
}

// ** CRUD functions ** //
// get all notes from JSON
const getNotes = () => {
    return 'Your notes...'
}

// add new note to JSON
const addNote = (title, body) => {
    const notes = loadNotes();

    // Checks for duplicate note; return value if found
    const duplicateNote = notes.find(note => note.title === title );
    
    // Only add unique notes
    if (!duplicateNote) {
        // Add note to current notes array
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(successFont('New note added!'));
    } else {
        console.log(errorFont('Note title taken!'));
    }
}

// remove a note from JSON using title
const removeNote = title => {
    const notes = loadNotes();

    // Filters array for all objects where title do not match the provided title
    const notesToKeep = notes.find(note => note.title !== title );

    // Logging for user
    if (notesToKeep.length === notes.length) {
        console.log(errorFont("No note found!"));
    } else {
        console.log(successFont("Note removed!"));
        saveNotes(notesToKeep);
    }
}

// list all notes
const listNotes = () => {
    console.log(titleFont("Your Notes"));
    const notes = loadNotes();
    notes.forEach(note => console.log(note.title))
}

// read one note's title and body
const readNote = title => {
    const notes = loadNotes();

    // Searches for provided title; returns immedietly if title is located in note list
    const note = notes.find(note => note.title === title );
    
    // if note it present
    if (note) {
        console.log(titleFont(note.title));
        console.log(note.body);
    } else {
        console.log(errorFont('Unable to find note!'));
    }
}

// *** EXPORTS *** //
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}