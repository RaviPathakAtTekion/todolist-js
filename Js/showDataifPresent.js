import { NoteArray } from "./data.js";
import addNote from "./addNote.js";

const showDataIfPresent = () => {
    // let isDataPresent = false;

    NoteArray.map(note => {
        if(note['id'] && note['status'] === true){
            addNote(note['timeStamp'], note['id'], note);
            // isDataPresent = true;
        }
    });
    // return isDataPresent;
}

export default showDataIfPresent;