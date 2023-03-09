import { changeTaskDiv } from "./data.js";
import currentTaskNumberFunction from "./CurrentTaskNumber.js";
import { addTasksToNotes } from "./getAndSetLocalStorage.js";
import { creationFunction, assignAttributes } from "./getTaskcreationData.js";

const addTask = (e) => {
  const { div, checkbox, input } = creationFunction();
  const workingDiv = e.target.parentElement.parentElement.dataset.setId;
  
  const currentTaskNumber = currentTaskNumberFunction(workingDiv);
  const divId = `div${workingDiv}task${currentTaskNumber}`;


  assignAttributes(div, checkbox, input, divId, currentTaskNumber);

  div.appendChild(checkbox);
  div.appendChild(input);

  const currentDiv = e.target.parentElement.parentElement.dataset.setId;

  changeTaskDiv(document.getElementById(`divAppender${currentDiv}`));

  const taskAddingDiv = document.getElementById(`divAppender${currentDiv}`);

  taskAddingDiv.prepend(div);

  addTasksToNotes(workingDiv, div.id);
};

export default addTask;
