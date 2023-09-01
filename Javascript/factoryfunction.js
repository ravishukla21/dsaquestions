//make objects using factory function

function createProduct(name, price, discount, itemcode) {
  return {
    itemnane: name,
    price: price,
    discount: discount,
    itemcode,
  };
}

const football = createProduct("football", 400, 5, 1234);
console.log(football, "football");
