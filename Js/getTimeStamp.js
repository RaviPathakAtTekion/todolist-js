
const timeStamp = (e) => {
    let time = new Date();

    const timeObject = {
        time : time.toLocaleTimeString(),
        date : time.toLocaleDateString()
    }
    return timeObject;
};

export default timeStamp;