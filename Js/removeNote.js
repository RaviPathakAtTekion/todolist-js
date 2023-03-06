import { NoteArray } from "./data.js";
import { getNumberOfNotes } from "./noOfNotes.js";

const removeNote = (e, id) => {
  
  NoteArray[id - 1] ? NoteArray[id - 1] = null : id - 1;
  
  localStorage.setItem("NoteArray", JSON.stringify(NoteArray));
  window.location.reload();
  getNumberOfNotes();
};

export default removeNote;
