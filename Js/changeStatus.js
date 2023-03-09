import changeTaskStatus from "./changeTaskStatus.js";

const changeStatus = (e) => {
  e.target.parentElement.childNodes[1].innerText !== null
    ? e.target.checked !== false
      ? changeTaskStatus(e, true)
      : changeTaskStatus(e, false)
    : "";
};

export default changeStatus;
