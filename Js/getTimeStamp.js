import { notes } from "./data.js";

const timeStamp = (e) => {
    let time = new Date();

    const timeObject = {
        time : time.toLocaleTimeString(),
        date : time.toLocaleDateString()
    }
    return timeObject;
};


const changeTime = (e) => {
    const divId = e.target.parentElement.parentElement.dataset.setId;
    notes[divId - 1]['timeStamp'] = timeStamp();

    localStorage.setItem('notes', JSON.stringify(notes));
}

export {timeStamp, changeTime};