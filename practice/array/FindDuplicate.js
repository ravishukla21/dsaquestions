console.log("hello world");
const abc = [1, 2, 3, 4, 2, 5, 6, 3];
let def = [];
// my  approach
// for (let i=0;i<abc.length;i++) {
//     console.log(i,"i")

//   for (let j=i+1;j<abc.length;j++) {
//     console.log(j,"j")
//     if(abc[i]===abc[j]){
//         def.push(abc[j])
//     }

//   }
// }
// console.log(def,"def");

// youtuber approach

const arrNumber=[1,2,8,2,3,6,5,2];


const duplicate=arrNumber.filter((ele,ind,arr)=>{
  
  console.log(arr.indexOf(ele),"firdt",ind)
 return arr.indexOf(ele)!==ind

})
console.log(duplicate,"duplicatess");
//usage of indexOf???