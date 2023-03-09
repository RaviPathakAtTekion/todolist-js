const creationFunction = () => {
  const div = document.createElement("div");
  const checkbox = document.createElement("input");
  const input = document.createElement("input");

  return { div, checkbox, input };
};

const assignAttributes = (
  div,
  checkbox,
  input,
  divId, 
  currentTaskNumber,
  message = ''
) => {
  div.className = "notes--input";
  div.id = divId;

  checkbox.type = "checkbox";
  checkbox.className = "note--checkbox";

  input.type = "text";
  input.placeholder = `Task ${currentTaskNumber}`;
  input.className = "specific-note__style";
  input.id = `task${currentTaskNumber}`;

  input.value = message !== '' ? message : '';
};

export { creationFunction, assignAttributes };
