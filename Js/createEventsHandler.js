import { noteAddingDiv, changeTaskButtonId } from "./data.js";
import addTask from "./addTask.js";
import removeNote from "./removeNote.js";
import getInputContent from "./getInputContent.js";
import changeTaskStatus from "./changeTaskStatus.js";

const createEventsHandler = () => {
  noteAddingDiv.addEventListener("click", (e) => {
    if (e.target.className === "addButton--note") {

      changeTaskButtonId(
        document.getElementById(
          `addTask${e.target.parentElement.dataset.setId}`
        )
      );

      addTask(e);
    } else if (e.target.className === "close--note") {
      let id = e.target.parentElement.dataset.setId;
      removeNote(e, id);

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
        getInputContent(e, titleValue);
      });

    } else if (e.target.classList.contains("specific-note__style")) {

      const parentId = document.getElementById(e.target.parentElement.id);
      parentId.childNodes[1].addEventListener("keydown", (e) => {
        
        getInputContent(e, parentId.childNodes[1]);
      })

    } 
    // else {
    //   console.log("blank");
    // }
  });
};

export default createEventsHandler;
