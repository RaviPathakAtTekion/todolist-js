const changeNotesNumber = document.getElementById("changeNoOfNotes");

const createNote = document.getElementById("createNewNote");

let addTaskButton = document.getElementById("addTask1");

const noteAddingDiv = document.getElementById("divStarter");

let taskAddingDiv = document.getElementById("divAppender");

const noOfNotes = document.getElementById("changeNoOfNotes");

const timePara = document.getElementsByClassName("getTime")[0];

let notes = JSON.parse(localStorage.getItem('notes'));

let initialId = 0;

if(notes === null){
  notes = [];
}

const trueNotes = () => {
  let countTrueNotes = 0;
  notes.map(note => {
    if(note !== null){
      countTrueNotes++;
    }
  })
  return countTrueNotes;
}

const changeId = () => {
  return notes === null ? 0 : notes.length + 1;
}

const changeTaskDiv = (value) => {
  taskAddingDiv = value;
};

const changeTaskButtonId = (id) => {
  addTaskButton = id;
};

export {
  notes, 
  initialId,
  timePara,
  changeNotesNumber,
  createNote,
  addTaskButton,
  noteAddingDiv,
  taskAddingDiv,
  noOfNotes,
  trueNotes,
  changeId,
  changeTaskDiv,
  changeTaskButtonId,
};
