import { NoteArray, changeId } from "./data.js";

const setNoteToArray = (mainDiv, noteMakingTime) => {
  const Note = makeNoteObject(mainDiv.dataset.setId, noteMakingTime);
  changeId();

  NoteArray.push(Note);

  localStorage.setItem("NoteArray", JSON.stringify(NoteArray));
};

const addTasksToNoteArray = (workingNoteId, divId) => {
  const newTask = {
    id: divId,
    content: "",
    completedStatus: false,
  };
  NoteArray[workingNoteId - 1]['task'].push(newTask);
  localStorage.setItem("NoteArray", JSON.stringify(NoteArray));
  
};

const addTitleToNote = (divId, title = "") => {
  NoteArray[divId - 1]["title"] = title;
  localStorage.setItem("NoteArray", JSON.stringify(NoteArray));
};

const addMessageToTask = (divId, taskNumber, message = "") => {
  NoteArray[divId - 1]["task"][taskNumber - 1]["content"] = message;

  localStorage.setItem("NoteArray", JSON.stringify(NoteArray));
};

const removeNoteFromArray = () => {};

const makeNoteObject = (setId, timeObject) => {
  const newNote = {
    title: ``,
    id: setId,
    task: [],
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
  addTasksToNoteArray,
  addTitleToNote,
  addMessageToTask,
};
