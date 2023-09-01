//coffee shop

//chaning of promises

function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink == "coffee") {
      resolve("order for coffee received");
    } else {
      reject("other order rejected");
    }
  });
}

function processOrder(order) {
  return new Promise(function (resolve) {
    console.log("order is being processsed");
    resolve(" served" + order);
  });
}

placeOrder("coffee")
  .then((res) => {
    console.log(res);
    let orderisprocessed = processOrder(res);
    return orderisprocessed;
  })
  .then((processedorder) => {
    console.log(processedorder);
  })
  .catch((err) => {
    console.log(err, "err");
  });
