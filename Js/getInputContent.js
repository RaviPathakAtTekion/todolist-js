import { addMessageToTask, addTitleToNote } from "./getAndSetLocalStorage.js";

const getInputContent = (inputTag, event) => {
    if(event.key === 'Enter'){

        // console.log("enter accepted", event.key);
        
        // e.target.classList.add('dont--edit--title');
        event.target.setAttribute('readonly', true);

        inputTag.addEventListener("dblclick", (e) => {
            e.target.removeAttribute('readonly');
        })
        if(event.target.parentElement.className === "notes--input"){
            const divId = event.target.parentElement.parentElement.parentElement.dataset.setId;
            const taskId = event.target.parentElement.id;
            // console.log(taskId, divId);
            
            const message = event.target.value.toString();
            addMessageToTask(divId, taskId, message);
            // console.log(event.target.value);
        } else {

            const divId = event.target.parentElement.dataset.setId;
            const message = event.target.value.toString();
            addTitleToNote(divId, message);
        }
        
    }
}

export default getInputContent;