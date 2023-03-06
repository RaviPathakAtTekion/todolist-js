import { NoteArray } from "./data.js";

const changeTaskStatus = (e, status) => {
  if (status) {
    e.target.parentElement.childNodes[1].classList.add("strike--task");

    NoteArray.map(note => {
        if(note !== null && note['task'].length > 0){
            note['task'].map(ele => {
                if(ele['content'].length > 0){
                    if(ele['id'] === e.target.parentElement.id.toString() && ele['completedStatus'] === false)
                    ele['completedStatus'] = true;
                }
            })
        }
        
    });
    localStorage.setItem('NoteArray', JSON.stringify(NoteArray));
    e.target.parentElement.childNodes[0].checked = true;
    
  } else {
    e.target.parentElement.childNodes[1].classList.remove("strike--task");

    NoteArray.map(note => {
        if(note !== null && note['task'].length > 0){
            note['task'].map(ele => {
                if(ele['content'].length > 0){
                    if(ele['id'] === e.target.parentElement.id.toString()  && ele['completedStatus'] === true)
                    ele['completedStatus'] = false;
                }
            })
        }
        
    })
    localStorage.setItem('NoteArray', JSON.stringify(NoteArray));
    e.target.parentElement.childNodes[0].checked = false;
  }
};
export default changeTaskStatus;
