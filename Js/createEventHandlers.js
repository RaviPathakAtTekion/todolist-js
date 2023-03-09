import { noteAddingDiv } from "./data.js";
import removeNote from "./removeNote.js";
import changeStatus from "./ChangeStatus.js";
import addBoxStyle from "./addBoxStyle.js";
import addButton from "./addButtonThrottle.js";
import acceptInput from "./acceptInput.js";

const createEventHandlers = () => {
  noteAddingDiv.addEventListener("click", (e) => {

    if(e.target.classList.contains("specific-note__style")){
      acceptInput(e, 1);
    }
    
    switch (e.target.className) {
      case "addButton--note":
        addButton(e);
        break;

      case "close--note":
        let id = e.target.parentElement.dataset.setId;
        removeNote(e, id);
        break;

      case "note--checkbox":
        changeStatus(e);
        break;
        
      case "title--input__style":
        acceptInput(e, 2);
        break;
         
      default:
        console.log("blank");
        break;
    }

    if(e.target.classList.contains('note--container')){
      addBoxStyle(e);
    }
  });
};

export default createEventHandlers;
