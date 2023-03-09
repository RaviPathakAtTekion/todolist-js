import { timeStamp } from "./getTimeStamp.js";
import addNote from "./addNote.js";

const delayTime = 2000;

const buttonCallback = () => {
  const timeObject = timeStamp();
  addNote(timeObject, -1);
};

const throttler = (callback, delay) => {
  let flag = false;

  return () => {
    if(flag){
        return console.log("no output");
    }

    callback();
    flag = true;

    setTimeout(() => {
        flag = false;
    }, delay);
  }
};

const addNoteThrottler = throttler(buttonCallback, delayTime);

export default addNoteThrottler;
