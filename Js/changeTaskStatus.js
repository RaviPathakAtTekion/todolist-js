import { NoteArray } from "./data.js";

const changeTaskStatus = (e, status) => {
  if (status) {
    e.target.parentElement.childNodes[1].classList.add("strike--task");

    const divId = e.target.parentElement.parentElement.parentElement.dataset.setId;
    const taskId = e.target.parentElement.childNodes[1].id.substring(4);
    
    if(NoteArray[divId - 1]['task'][taskId]['completedStatus'] === false){
        NoteArray[divId - 1]['task'][taskId]['completedStatus'] = true;
    }
    

    localStorage.setItem('NoteArray', JSON.stringify(NoteArray));
    e.target.parentElement.childNodes[0].checked = true;
    
  } else {
    e.target.parentElement.childNodes[1].classList.remove("strike--task");

    const divId = e.target.parentElement.parentElement.parentElement.dataset.setId;
    const taskId = e.target.parentElement.childNodes[1].id.substring(4);
    
    if(NoteArray[divId - 1]['task'][taskId]['completedStatus'] === true){
        NoteArray[divId - 1]['task'][taskId]['completedStatus'] = false;
    }

    localStorage.setItem('NoteArray', JSON.stringify(NoteArray));
    e.target.parentElement.childNodes[0].checked = false;
  }
};
export default changeTaskStatus;
