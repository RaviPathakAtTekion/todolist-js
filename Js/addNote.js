import { noteAddingDiv } from "./data.js";
import { setNoteToArray } from "./getAndSetLocalStorage.js";
import getId from "./getId.js";
import getNumberOfNotes from "./noOfNotes.js";
import setExistingData from "./setExistingData.js";

const addNote = (noteMakingTime, anyId, note = "") => {
  const outerDiv = document.createElement("div");
  const titleInput = document.createElement("input");
  const closeButton = document.createElement("button");
  const innerDiv = document.createElement("div");

  const buttonAndTimeDiv = document.createElement("div");
  const addButton = document.createElement("button");
  const timeStamp = document.createElement("p");

  const newInitialId = getId(anyId);

  outerDiv.id = `div${newInitialId}`;
  outerDiv.classList.add("note--container");
  outerDiv.dataset.setId = `${newInitialId}`;

  titleInput.className = "title--input__style";
  titleInput.type = "text";
  titleInput.id = `div${newInitialId}Title`;
  titleInput.value = "";

  titleInput.value = note['title'] ? note['title'] : '';
  titleInput.placeholder = 'Title';

  closeButton.className = "close--note";
  closeButton.type = "button";
  closeButton.innerText = "X";

  innerDiv.id = `divAppender${newInitialId}`;

  buttonAndTimeDiv.className = "button--time--style";
  timeStamp.innerText = ``;
  timeStamp.className = `getTime`;

  timeStamp.innerText = `${noteMakingTime.date} : ${noteMakingTime.time}`;

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

  noteAddingDiv.prepend(outerDiv);
  
  if (anyId === newInitialId) {
    setExistingData(newInitialId, note)
  } else {
    setNoteToArray(outerDiv, noteMakingTime);
  }

  getNumberOfNotes();
};

export default addNote;
