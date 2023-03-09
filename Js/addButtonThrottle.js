import { changeTaskButtonId } from "./data.js";
import addTask from "./addTask.js";
import { changeTime } from "./getTimeStamp.js";

const addButton = (e) => {
  changeTaskButtonId(
    document.getElementById(`addTask${e.target.parentElement.dataset.setId}`)
  );
  addTask(e);
  changeTime(e);
  console.log("called");
  
};

export default addButton;
