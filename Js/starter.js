import {
  createNote,
  NoteArray
} from "./data.js";
import addNote from "./addNote.js";
import { getNumberOfNotes } from "./noOfNotes.js";
import timeStamp from "./getTimeStamp.js";
import eventDelegation from "./eventDelegation.js";
import showDataIfPresent from "./showDataifPresent.js";
// import { setNoteToArray } from "./getAndSetLocalStorage.js";

// showDataIfPresent() === false ? '' : 

NoteArray.length > 0 ? showDataIfPresent() : '';

eventDelegation();

createNote.addEventListener("click", () => {
  const timeObject = timeStamp();
  addNote(timeObject, -1);
});

getNumberOfNotes();


// const initialTimeRender = () => {
//   const timeObject = timeStamp();
//   timePara.innerHTML = `${timeObject.time} :: ${timeObject.date}`;
// };

// initialTimeRender();