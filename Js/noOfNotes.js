import { noOfNotes, trueNotes } from "./data.js";

const getNumberOfNotes = () => {
  const counNotes = trueNotes();
  noOfNotes.innerText = `Total No of Notes : ${counNotes}`;
};

export default getNumberOfNotes;
