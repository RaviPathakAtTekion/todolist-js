const changeNotesNumber = document.getElementById("changeNoOfNotes");

const createNote = document.getElementById("createNewNote");

let addTaskButton = document.getElementById("addTask1");

const noteAddingDiv = document.getElementById("divStarter");

let taskAddingDiv = document.getElementById("divAppender");

const noOfNotes = document.getElementById("changeNoOfNotes");

const timePara = document.getElementsByClassName("getTime")[0];

let NoteArray = JSON.parse(localStorage.getItem('NoteArray'));

let initialId = 0;

if(NoteArray === null){
  NoteArray = [];
}

const trueNotes = () => {
  let countTrueNotes = 0;
  NoteArray.map(note => {
    if(note !== null){
      countTrueNotes++;
    }
  })
  return countTrueNotes;
}

const changeId = () => {

  return NoteArray === null ? 0 : NoteArray.length;
}

const changeTaskDiv = (value) => {
  taskAddingDiv = value;
};

const changeTaskButtonId = (id) => {
  addTaskButton = id;
};

export {
  NoteArray, 
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
