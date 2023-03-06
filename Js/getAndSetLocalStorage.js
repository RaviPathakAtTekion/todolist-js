import { NoteArray, changeId } from "./data.js";

const setNoteToArray = (mainDiv, noteMakingTime) => {
  
  const Note = makeNoteObject(mainDiv.dataset.setId, noteMakingTime);
  changeId();

  NoteArray.push(Note);

  localStorage.setItem('NoteArray', JSON.stringify(NoteArray));

};

const addTasksToNoteArray = (workingNoteId, divId) => {

  const newTask = {
    id: divId,
    content: '',
    completedStatus : false,
  };

  NoteArray.map((ele) => {
    if (ele !== null && ele['id'] === workingNoteId) {
      ele['task'].push(newTask);
    }
  });
  localStorage.setItem('NoteArray', JSON.stringify(NoteArray));

};

const addTitleToNote = (divId, title = '') => {

    NoteArray.map(ele => {
        if(ele !== null && ele['id'] ===  divId){
            
            ele['title'] = title;
        }
    });
    localStorage.setItem('NoteArray', JSON.stringify(NoteArray));

}

const addMessageToTask = (divId, taskId, message = '') => {
    NoteArray.map(ele => {
        if(ele !== null && ele['id'] === divId){
            ele['task'].map(task => {

                if(task['id'] === taskId){
                    task['content'] = message;
                }
            });
        }
    });
    localStorage.setItem('NoteArray', JSON.stringify(NoteArray));

}

const removeNoteFromArray = () => {};

const makeNoteObject = (setId, timeObject) => {
  const newNote = {
    title: ``,
    id: setId,
    task: [],
    status : true,
    timeStamp : {
      time : timeObject.time,
      date : timeObject.date,
    }
  };
  return newNote;
};

export { setNoteToArray, removeNoteFromArray, addTasksToNoteArray, addTitleToNote, addMessageToTask };
