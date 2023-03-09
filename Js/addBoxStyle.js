import { notes } from "./data.js";

const addBoxStyle = (e) => {
  notes.map((note) => {
    if (note !== null) {
      const selectDiv = document.getElementById(`div${note["id"]}`);
      selectDiv.classList.remove("addBox--style");
    }
  });
  document
    .getElementById(`div${e.target.dataset.setId}`)
    .classList.toggle("addBox--style");
};

export default addBoxStyle;
