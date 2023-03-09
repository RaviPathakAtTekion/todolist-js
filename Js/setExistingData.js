
import { assignAttributes, creationFunction } from "./getTaskCreationData.js";

const setExistingData = (Id, note) => {
  note["tasks"]?.map(task => {
    if (task["content"].length > 0) {
      const { div, checkbox, input } = creationFunction();

      const divId = task["id"];
      const currentTaskNumber = task["id"].substring(8);
      const message = task["content"];

      assignAttributes(div, checkbox, input, divId, currentTaskNumber, message);

      if (task["completedStatus"]) {
        input.classList.add("strike--task");
        checkbox.checked = true;
      } else {
        input.classList.remove("strike--task");
        checkbox.checked = false;
      }

      div.appendChild(checkbox);
      div.appendChild(input);

      const taskAddingDiv = document.getElementById(`divAppender${Id}`);

      taskAddingDiv.prepend(div);
    }
  });
};

export default setExistingData;
