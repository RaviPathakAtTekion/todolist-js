const currentTaskNumberFunction = (e) => {
  return Number(
        e.target.parentElement.parentElement.childNodes[3].childNodes.length + 1
      );
};
export default currentTaskNumberFunction;
