import { addMessageToTask, addTitleToNote } from "./getAndSetLocalStorage.js";

const getInputContent = (event, inputTag) => {
  if (event.key === "Enter") {
    if (inputTag.classList.contains("specific-note__style")) {
      event.target.blur();

      const divId =
        event.target.parentElement.parentElement.parentElement.dataset.setId;

      const taskId = event.target.parentElement.id;

      const message = event.target.value.toString();
      addMessageToTask(divId, taskId, message);
    } else {
      event.target.blur();

      const divId = event.target.parentElement.dataset.setId;
      const message = event.target.value.toString();
      addTitleToNote(divId, message);
    }
  }
};

export default getInputContent;
