import { notes } from "./data.js";
import addNote from "./addNote.js";

const checkNotePresence = () => {

    notes.map((note) => {
        if(note !== null){  
            addNote(note['timeStamp'], note['id'], note);
        }
    });
}

export default checkNotePresence;