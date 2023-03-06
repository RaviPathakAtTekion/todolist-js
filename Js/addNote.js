import { noteAddingDiv, changeId } from "./data.js";
import { getNumberOfNotes } from "./noOfNotes.js";
import { setNoteToArray } from "./getAndSetLocalStorage.js";
import setValuesForExistingNote from "./setValuesForExistingNote.js";

const addNote = (noteMakingTime, anyId, note = "") => {
  const outerDiv = document.createElement("div");
  const titleInput = document.createElement("input");
  const closeButton = document.createElement("button");
  const innerDiv = document.createElement("div");

  const buttonAndTimeDiv = document.createElement("div");
  const addButton = document.createElement("button");
  const timeStamp = document.createElement("p");

  let newInitialId = -1;

  if (newInitialId === anyId) {
    newInitialId = changeId();
  } else {
    newInitialId = anyId;
  }

  outerDiv.id = `div${newInitialId}`;
  outerDiv.className = "note--container";
  outerDiv.dataset.setId = `${newInitialId}`;

  titleInput.className = "title--input__style";
  titleInput.type = "text";
  titleInput.id = `div${newInitialId}Title`;
  titleInput.value = "";

  if (newInitialId === anyId) {
    if (note !== null && note["title"].length === 0) {
      titleInput.placeholder = "Title";
    } else {
      titleInput.value = note["title"];
    }
  } else {
    titleInput.placeholder = "Title";
  }

  closeButton.className = "close--note";
  closeButton.type = "button";
  closeButton.innerText = "X";

  innerDiv.id = `divAppender${newInitialId}`;

  buttonAndTimeDiv.className = "button--time--style";
  timeStamp.innerText = ``;
  timeStamp.className = `getTime`;

  timeStamp.innerText = `${noteMakingTime.time} :: ${noteMakingTime.date}`;

  addButton.className = "addButton--note";
  addButton.id = `addTask${newInitialId}`;
  addButton.type = "button";
  addButton.innerText = "Add";

  outerDiv.appendChild(titleInput);
  outerDiv.appendChild(closeButton);

  buttonAndTimeDiv.appendChild(addButton);
  buttonAndTimeDiv.appendChild(timeStamp);
  outerDiv.appendChild(buttonAndTimeDiv);

  outerDiv.appendChild(innerDiv);

  noteAddingDiv.appendChild(outerDiv);
  
  if (anyId === newInitialId) {
    setValuesForExistingNote(newInitialId, outerDiv, note);
  } else {
    setNoteToArray(outerDiv, noteMakingTime);
  }
  getNumberOfNotes();
};

export default addNote;
