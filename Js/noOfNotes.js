import { noOfNotes, changeId, trueNotes } from "./data.js";

const getNumberOfNotes = () => {
  // const counNotes = changeId();
  let counNotes = trueNotes();
  // counNotes === 0 ? 0 : counNotes + 1;
  noOfNotes.innerText = `Total No of Notes : ${counNotes}`;
};

export { getNumberOfNotes };
