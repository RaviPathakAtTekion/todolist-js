import { notes } from "./data.js";
import getNumberOfNotes from "./noOfNotes.js";

const removeNote = (e, id) => {
  
  notes[id - 1] ? notes[id - 1] = null : id - 1;
  
  localStorage.setItem("notes", JSON.stringify(notes));
  window.location.reload();
  getNumberOfNotes();
};

export default removeNote;
