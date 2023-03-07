import {
  createNote,
  NoteArray
} from "./data.js";
import addNote from "./addNote.js";
import { getNumberOfNotes } from "./noOfNotes.js";
import timeStamp from "./getTimeStamp.js";
import checkDataPresence from "./checkDataPresence.js";
import createEventsHandler from "./createEventsHandler.js";

NoteArray.length > 0 ? checkDataPresence() : '';

createEventsHandler();

createNote.addEventListener("click", () => {
  const timeObject = timeStamp();
  addNote(timeObject, -1);
});

getNumberOfNotes();
