//debouncingvs throttling
//ques1//cretae a button ui and add debounce as follows

//show buton pressed x times every time button is pressed
//increase 'triggered y times' count after 800ms of debounce

//ques2=>throttle
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");
var pressedCount = 0;

var triggerCount = 0;
const debouncedCount = _.debounce(() => {
  count.innerHTML = ++triggerCount;
}, 800);
btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debouncedCount();
});
