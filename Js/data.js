const changeNotesNumber = document.getElementById("changeNoOfNotes");

const createNote = document.getElementById("createNewNote");

let addTaskButton = document.getElementById("addTask1");

const noteAddingDiv = document.getElementById("divStarter");

let taskAddingDiv = document.getElementById("divAppender");

const noOfNotes = document.getElementById("changeNoOfNotes");

// const title = document.getElementsByClassName('title--input__style')[0];

// const closeNoteButton = document.getElementsByClassName("close--note")[0];
// console.log(closeNoteButton);


const timePara = document.getElementsByClassName("getTime")[0];

let NoteArray = JSON.parse(localStorage.getItem('NoteArray'));

// let initialId = NoteArray === null ? 0 : NoteArray.length;
let initialId = 0;

// let divNumber = 0;

if(NoteArray === null){
  NoteArray = [];
  // console.log(NoteArray);
}

const trueNotes = () => {
  let countTrueNotes = 0;
  NoteArray.map(note => {
    if(note['status'] === true){
      countTrueNotes++;
    }
  })
  return countTrueNotes;
}

const changeId = () => {
  // console.log(NoteArray === null ? 0 : NoteArray.length);
  
  return NoteArray === null ? 0 : NoteArray.length;
}

const changeTaskDiv = (value) => {
  taskAddingDiv = value;
};

// const increaseDivNumber = () => {
//   return divNumber++;
// };

const changeTaskButtonId = (id) => {
  addTaskButton = id;
};

// const decreaseDivNumber = () => {
//   return divNumber--;
// };

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
