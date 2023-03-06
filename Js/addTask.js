import { changeTaskDiv } from "./data.js";
import currentTaskNumberFunction from "./CurrentTaskNumber.js";
import insertTask from "./insertTask.js";
import { addTasksToNoteArray } from "./getAndSetLocalStorage.js";

const addTask = (e) => {
  const div = document.createElement("div");
  const checkbox = document.createElement("input");
  const input = document.createElement("input");

  //   console.log(e.target);

  div.className = "notes--input";
  const workingDiv = e.target.parentElement.parentElement.dataset.setId;
  // console.log(workingDiv);

  //   console.log(e.target.parentElement.parentElement.childNodes[3]);
  //   console.log(currentTaskNumber);

  let currentTaskNumber = currentTaskNumberFunction(e);
  div.id = `div${workingDiv}task${currentTaskNumber}`;
  // console.log(currentTaskNumber);

  checkbox.type = "checkbox";
  checkbox.className = "note--checkbox";

  input.type = "text";
  input.placeholder = `${currentTaskNumber}`;
  input.className = "specific-note__style";
  input.id = `task${currentTaskNumber}`;

  div.appendChild(checkbox);
  div.appendChild(input);

  const currentDiv = e.target.parentElement.parentElement.dataset.setId;

  changeTaskDiv(document.getElementById(`divAppender${currentDiv}`));

  let taskAddingDiv = document.getElementById(`divAppender${currentDiv}`);

  // let taskAddingDiv = document.getElementById(`divAppender${currentDiv}`);
  // console.log(taskAddingDiv, currentDiv);

  const insertingPosition = insertTask(e);

  taskAddingDiv.insertBefore(div, insertingPosition);

  // console.log(taskAddingDiv);
  // taskAddingDiv.appendChild(div);

  addTasksToNoteArray(workingDiv, div.id);
  // console.log(workingDiv, div.id);
};

export default addTask;
