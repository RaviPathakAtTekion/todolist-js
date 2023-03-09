import { notes } from "./data.js";

const changeTaskStatus = (e, status) => {
  if (status) {
    e.target.parentElement.childNodes[1].classList.add("strike--task");

    const divId = e.target.parentElement.parentElement.parentElement.dataset.setId;
    const taskId = e.target.parentElement.childNodes[1].id.substring(4);
    
    if(notes[divId - 1]['tasks'][taskId - 1]['completedStatus'] === false){
        notes[divId - 1]['tasks'][taskId - 1]['completedStatus'] = true;
    }

    localStorage.setItem('notes', JSON.stringify(notes));
    e.target.parentElement.childNodes[0].checked = true;
    
  } else {
    e.target.parentElement.childNodes[1].classList.remove("strike--task");

    const divId = e.target.parentElement.parentElement.parentElement.dataset.setId;
    const taskId = e.target.parentElement.childNodes[1].id.substring(4);
    
    if(notes[divId - 1]['tasks'][taskId - 1]['completedStatus'] === true){
        notes[divId - 1]['tasks'][taskId - 1]['completedStatus'] = false;
    }

    localStorage.setItem('notes', JSON.stringify(notes));
    e.target.parentElement.childNodes[0].checked = false;
  }
};
export default changeTaskStatus;
