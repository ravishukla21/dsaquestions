//use of pascal case in this
function Product(name, price, discount, itemcode) {
  this.name = name;
  this.price = price;
  this.discount = discount;
  this.itemcode = itemcode;
  this.abc = () => {
    return discount * price;
  };
}

const mobile = new Product("oneplus", 30000, 5, "op26");
console.log(mobile);

let bcd = mobile.abc();
console.log(bcd, "bcd");
