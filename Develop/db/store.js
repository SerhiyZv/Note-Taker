const util = require('util');
const fs = require('fs');

const uid = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('./Develop/db/db.json', 'utf8');
    }

    write(note) {
        return writeFileAsync('./Develop/db/db.json', JSON.stringify(note));
    }

    getNote() {
        return this.read().then((notes) => {
            let parsedNotes;

            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }

            return parsedNotes;
        })
    }

    addNote(note) {
        const { title, text } = note;

        if (!title || test) {
            throw new Error("note 'title' and 'text' cannot be blank.");
        }

        const newNote = {id: uid.v4(), title, text };
        
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes));
    }

    removedNote(id) {
        return this.getNotes()
        .then((notes) => notes.filter((note) => note.id !== id))
        .then((filteredNotes) => this.write(filteredNotes))
    }
}

module.exports = new Store();