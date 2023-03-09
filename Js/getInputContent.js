import { addMessageToTask, addTitleToNote } from "./getAndSetLocalStorage.js";

const getInputContent = (event, inputTag) => {
  if (inputTag.classList.contains("specific-note__style")) {
    event.target.blur();

    const divId =
      event.target.parentElement.parentElement.parentElement.dataset.setId;

    const taskNumber = event.target.id.substring(4);

    const message = event.target.value.toString();
    addMessageToTask(divId, taskNumber, message);
  } else {
    event.target.blur();

    const divId = event.target.parentElement.dataset.setId;
    const message = event.target.value.toUpperCase();
    addTitleToNote(divId, message);
  }
};

export default getInputContent;
