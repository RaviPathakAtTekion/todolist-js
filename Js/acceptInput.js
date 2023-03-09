import getInputContent from "./getInputContent.js";
import debounceTitleInput from "./debouncsTitleInput.js";

const acceptInput = (e, value) => {
  if (value === 1) {
    const parentId = document.getElementById(e.target.parentElement.id);

    parentId.childNodes[1].addEventListener("keydown", (e) => {
      e.key === "Enter" ? getInputContent(e, parentId.childNodes[1]) : '';
    });

  } else if (value === 2) {
    const titleValue = document.getElementById(
      `div${e.target.parentElement.dataset.setId}Title`
    );

    titleValue.addEventListener("keydown", (e) => {
      e.key === "Enter" ? getInputContent(e, titleValue) : debounceTitleInput(e);
    });
    
  } else {
    console.log("not valid");
  }
};

export default acceptInput;
