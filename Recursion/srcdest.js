let src = 1;
let dest = 10;

function srcdest(src, dest) {
  console.log(src, "src", dest, "dest");
  if (src == dest) {
    return "pahucch gya";
  }
  src++;
  srcdest(src, dest);
}

srcdest(src, dest);

// console.log(255 / 10);
// console.log(25.5 % 10);
// console.log(5.5 / 10);
// console.log(0.255 % 10);
