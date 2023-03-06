import { NoteArray } from "./data.js";
import { getNumberOfNotes } from "./noOfNotes.js";

const removeNote = (e, id) => {
  NoteArray[id] ? NoteArray[id] = null : id;
  
  localStorage.setItem("NoteArray", JSON.stringify(NoteArray));
  window.location.reload();
  getNumberOfNotes();
};

export default removeNote;
