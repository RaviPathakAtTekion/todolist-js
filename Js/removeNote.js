import { NoteArray } from "./data.js";
import { getNumberOfNotes } from "./noOfNotes.js";

const removeNote = (e, id) => {

  NoteArray.map((note) => {
    // note['id'] === id ? deletingDiv.remove() : null;

    if (note["id"] === id) note["status"] = false;
  });

  localStorage.setItem("NoteArray", JSON.stringify(NoteArray));
  // deletingDiv.remove();

  // decreaseDivNumber();

  window.location.reload();
  getNumberOfNotes();
};

export default removeNote;
