import { notes } from "./data.js";

const setNoteToArray = (mainDiv, noteMakingTime) => {
  const note = makeNoteObject(mainDiv.dataset.setId, noteMakingTime);
  notes.push(note);

  localStorage.setItem("notes", JSON.stringify(notes));
};

const addTasksToNotes = (workingNoteId, divId) => {
  const newTask = {
    id: divId,
    content: "",
    completedStatus: false,
  };
  notes[workingNoteId - 1]['tasks'].push(newTask);
  localStorage.setItem("notes", JSON.stringify(notes));
  
};

const addTitleToNote = (divId, title = "") => {
  notes[divId - 1]["title"] = title;
  localStorage.setItem("notes", JSON.stringify(notes));

  window.location.reload();
};

const addMessageToTask = (divId, taskNumber, message = "") => {

  notes[divId - 1]["tasks"][taskNumber - 1]["content"] = message;

  localStorage.setItem("notes", JSON.stringify(notes));
};

const removeNoteFromArray = () => {};

const makeNoteObject = (setId, timeObject) => {
  const newNote = {
    title: ``,
    id: setId,
    tasks: [],
    timeStamp: {
      time: timeObject.time,
      date: timeObject.date,
    },
  };
  return newNote;
};

export {
  setNoteToArray,
  removeNoteFromArray,
  addTasksToNotes,
  addTitleToNote,
  addMessageToTask,
};
