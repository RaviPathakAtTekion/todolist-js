import { notes } from "./data.js";

const currentTaskNumberFunction = (workingDiv) => {
  return notes[workingDiv - 1]['tasks'].length + 1;
};
export default currentTaskNumberFunction;
