import getInputContent from "./getInputContent.js";

// const getInput = (e, target) => {
//   console.log(e.key.toUpperCase());
// }

const debouncer = (callback, delay = 1000) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, args);
      
    }, delay);
  };
};

const debounceTitleInput = debouncer((e) => getInputContent(e, e.target));

export default debounceTitleInput;
