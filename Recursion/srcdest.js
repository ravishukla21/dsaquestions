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
