import {
  createNote,
  notes
} from "./data.js";
import addNoteThrottler from "./addNoteThrottler.js";
import getNumberOfNotes from "./noOfNotes.js";
import createEventHandlers from "./createEventHandlers.js";
import checkNotePresence from "./checkNotePresence.js";

notes.length > 0 ? checkNotePresence() : '';

createEventHandlers();

createNote.addEventListener("click", () => {
  addNoteThrottler();
});

getNumberOfNotes();
