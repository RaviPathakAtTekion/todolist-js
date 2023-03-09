////// throttling

// const callbackFunction = () => {
//   console.log(this);
//   console.log("callback function");
// };

// const delayTime = 3000;

// const throttler = (callback, delay) => {
//   console.log("function called");
//   let flag = true;

//   return () => {
//     if (flag) {
//       callback();
//       flag = false;

//       setTimeout(() => {
//         console.log("time out");
//         flag = true;
//       }, delay);
//     }
//   };
// };

// const betterFunction = throttler(callbackFunction, delayTime);
// betterFunction();

//////  debouncing

// const inputField = document.getElementById("inputData");
// let counter = 0;
// const delay = 500;

// const getData = () => {
//   console.log("getting data", counter++);
// };

// const debouncing = (func, time) => {
//   let timer;
//   return () => {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       func();
//     }, time);
//   };
// };

// const callDebounce = debouncing(getData, delay);

// inputField.addEventListener("keydown", (e) => {
//   callDebounce(e);
// });


/////// prototype 

// const arr = [1,2,3,4,5];
// const obj = {
//     firstname : "ravi",
//     lastname : "pathak"
// } 
// console.log(arr.__proto__, a);
