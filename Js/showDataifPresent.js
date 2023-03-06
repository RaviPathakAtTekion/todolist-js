import { NoteArray } from "./data.js";
import addNote from "./addNote.js";

const showDataIfPresent = () => {

    NoteArray.map((note) => {
        if(note !== null){
            addNote(note['timeStamp'], note['id'], note);
        }
    });
}

export default showDataIfPresent;