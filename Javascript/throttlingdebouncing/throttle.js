//throttle
const btn = document.querySelector(".click_button");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");
var pressedCount = 0;

var triggerCount = 0;
const start = new Date().getTime();
const throttledcount = _.throttle(() => {
  const now = new Date().getTime();
  console.log(now - start);
  count.innerHTML = ++triggerCount;
}, 800);
btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttledcount();
});
