// *** UTILITIES FOR APPLICATION *** //

// *** MODULES *** //
// global modules
const fs = require('fs'); // file system

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

    // Checks for duplicate notes
    const duplicateNotes = notes.filter(note => {
        return note.title === title; // if the title is present in any of the notes array, return true, else false
    });
    
    // Only add unique notes
    if (duplicateNotes.length === 0) {
        // Add note to current notes array
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('Note title taken!');
    }
}

// EXPORTS  //
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}