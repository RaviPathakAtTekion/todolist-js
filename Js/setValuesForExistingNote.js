import insertTask from "./insertTask.js";

const setValuesForExistingNote = (Id, mainDiv, note) => {

  const noteObject = Object.entries(note);
  noteObject.forEach(([key, _]) => {
    if (key === "task") {
      if (note !== null && note["task"].length !== 0) {
        note["task"].map((task, i) => {
          if (task["content"].length > 0) {
            const div = document.createElement("div");
            const checkbox = document.createElement("input");
            const input = document.createElement("input");
            div.className = "notes--input";

            div.id = `${task["id"]}`;

            checkbox.type = "checkbox";
            checkbox.className = "note--checkbox";

            input.type = "text";
            input.className = "specific-note__style";
            input.id = `task${i}`;
            let message = task["content"] === "" ? "" : task["content"];
            input.value = message;

            if (task["completedStatus"]) {
              input.classList.add("strike--task");
              checkbox.checked = true;

            } else {
              input.classList.remove("strike--task");
              checkbox.checked = false;
            }

            div.appendChild(checkbox);
            div.appendChild(input);

            const currentDiv = Id;
            let taskAddingDiv = document.getElementById(
              `divAppender${currentDiv}`
            );

            const insertingPosition = insertTask(mainDiv.childNodes[2].childNodes[0]); 

            taskAddingDiv.insertBefore(div, insertingPosition);
            // taskAddingDiv.appendChild(div);
          }
        });
      }
    }
  });
};

export default setValuesForExistingNote;
