import { NoteArray, changeId } from "./data.js";

const setNoteToArray = (mainDiv, noteMakingTime) => {
  // const noteName = `${mainDiv.dataset.setId}`;
  
  const Note = makeNoteObject(mainDiv.dataset.setId, noteMakingTime);
  changeId();

  // localStorage.setItem('Note', JSON.stringify(Note));
  // Note['timeStamp']['time'] = noteMakingTime.time;
  // Note['timeStamp']['date'] = noteMakingTime.date;

  NoteArray.push(Note);

  localStorage.setItem('NoteArray', JSON.stringify(NoteArray));

  // console.log(NoteArray);
};

const addTasksToNoteArray = (workingNoteId, divId) => {

  const newTask = {
    id: divId,
    content: '',
    completedStatus : false,
  };

  // NoteArray = JSON.parse(localStorage.getItem('NoteArray'));

  NoteArray.map((ele) => {
    if (ele['id'] === workingNoteId) {
      ele['task'].push(newTask);
    }
  });
  localStorage.setItem('NoteArray', JSON.stringify(NoteArray));
  // console.log(NoteArray);
};

const addTitleToNote = (divId, title = '') => {
  // NoteArray = JSON.parse(localStorage.getItem('NoteArray'));

    NoteArray.map(ele => {
        if(ele['id'] ===  divId){
            
            ele['title'] = title;
        }
    });
    localStorage.setItem('NoteArray', JSON.stringify(NoteArray));
    // console.log(NoteArray);
}

const addMessageToTask = (divId, taskId, message = '') => {
    NoteArray.map(ele => {
        if(ele['id'] === divId){
            ele['task'].map(task => {
                // console.log(task, taskId);

                if(task['id'] === taskId){
                    // console.log(task['content']);
                    task['content'] = message;
                }
            });
        }
    });
    localStorage.setItem('NoteArray', JSON.stringify(NoteArray));
    // console.log(NoteArray);
    
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
