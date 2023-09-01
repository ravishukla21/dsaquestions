//to remove promise chaning we used async await

//Async Await are keywords
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
async function serveOrder() {
  try {
    let orderPlaced = await placeOrder("coffee");

    console.log(orderPlaced);
    let processedorder = await processOrder(orderPlaced);
    console.log(processedorder, "process");
  } catch (err) {
    console.log(err, "err");
  }
}

serveOrder();
