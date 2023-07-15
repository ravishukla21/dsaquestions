function recfactorial(n) {
  if (n == 1) {
    return 1;
  }
  let abc = n * recfactorial(n - 1);
  //5*fn(4)
  //4*fn(3)
  //3*fn(2)
  //2*fn(1)
  //fn(1)=1
  //2*fn{1}=2

  //3*2==6
  //6*4
  //24*5

  return abc;
}

console.log(recfactorial(5));
