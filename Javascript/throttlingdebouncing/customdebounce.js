//ques3=>create Debounce() polyfill implementation
const one = document.querySelector(".button_click");
const two = document.querySelector(".top_button");
const three = document.querySelector(".bottom_button");

let incr1 = 0;
let incr2 = 0;
const myDebounce = (cb, d) => {
  let timer;
};
one.addEventListener("click", () => {
  two.innerHTML = ++incr1;
  three.innerHTML = ++incr2;
});
