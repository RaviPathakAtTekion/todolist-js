import { noOfNotes, changeId, trueNotes } from "./data.js";

const getNumberOfNotes = () => {
  let counNotes = trueNotes();
  noOfNotes.innerText = `Total No of Notes : ${counNotes}`;
};

export { getNumberOfNotes };
