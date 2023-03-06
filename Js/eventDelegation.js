import { noteAddingDiv, changeTaskButtonId } from "./data.js";
import addTask from "./addTask.js";
import removeNote from "./removeNote.js";
import getInputContent from "./getInputContent.js";
import changeTaskStatus from "./changeTaskStatus.js";

const eventDelegation = () => {
  noteAddingDiv.addEventListener("click", (e) => {
    if (e.target.className === "addButton--note") {
      // addTaskButton = document.getElementById(`addTask${e.target.parentElement.dataset.setId}`)

      changeTaskButtonId(
        document.getElementById(
          `addTask${e.target.parentElement.dataset.setId}`
        )
      );
      // console.log(e);

      addTask(e);
    } else if (e.target.className === "close--note") {
      let id = e.target.parentElement.dataset.setId;

      const closeNoteButton = document.getElementsByClassName("close--note")[0];

      closeNoteButton.onclick = removeNote(e, id);
    } else if (e.target.className === "note--checkbox") {
      e.target.parentElement.childNodes[1].innerText !== null
        ? e.target.checked !== false
          ? changeTaskStatus(e, true)
          : changeTaskStatus(e, false)
        : "";
    } else if (e.target.className === "title--input__style") {
      const titleValue = document.getElementById(
        `div${e.target.parentElement.dataset.setId}Title`
      );

      titleValue.addEventListener("keydown", (e) => {
        getInputContent(titleValue, e);
      });
    } else if (e.target.className === "specific-note__style") {
      // console.log(e.target);

      const inputValue = document.getElementById(`${e.target.id}`);
      console.log(inputValue);

      inputValue.addEventListener("keyup", (e) => {
        // debugger;
        // console.log(e);
        
        console.log("pressed");

        getInputContent(inputValue, e);
      });
    } else {
      console.log("blank");
    }
  });
};

export default eventDelegation;
