//1.pending
//2.fulfilled
//3.rejected
//4.settled
let getpromise = new Promise((resolve, reject) => {
  let a = 5;
  let b = 4;
  setTimeout(() => {
    if (a == b) {
      resolve("both are equal");
    } else {
      reject("both are not equal");
    }
  }, 2000);
});

getpromise.then((res) => console.log("resolved" + " " + res));

getpromise.catch((err) => console.log(err));
