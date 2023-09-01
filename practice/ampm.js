let time = "01:59:00PM";

function print(time) {
  let ans = [];
  h1 = Number(time[1]);
  h2 = Number(time[0]);
  // console.log(h1, h2);
  let hh = h2 * 10 + (h1 % 10);
  // console.log(hh, "hh");
  if (time[8] == "A") {
    if (hh == 12) {
      console.log("00");
      for (let i = 2; i <= 7; i++) {
        console.log(time[i]);
      }
    } else {
      for (let i = 0; i <= 7; i++) {
        console.log(time[i]);
      }
    }
  } else {
    if (hh == 12) {
      console.log("12");
      for (let i = 2; i <= 7; i++) {
        console.log(time[i]);
      }
    } else {
      hh = hh + 12;
      // console.log(hh);
      ans.push(hh);
      for (let j = 2; j <= 7; j++) {
        // console.log(time[j]);
        ans.push(time[j]);
      }
    }
  }
  console.log(ans.join(""));
}

print(time);
