import { changeId } from "./data.js";

const getId = (anyId) => {
    let id = -1;
    id = id === anyId ? changeId() : anyId;
    return id;
}

export default getId;