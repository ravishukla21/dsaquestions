const arr=[4,2,1,1,9,3,0,-2,-6];
/// selection sort in which the number is less comes at the first;
function selectionSort(arr){
for(let i=0;i<=arr.length-2;i++){
    for(let j=i;j<=arr.length-1;j++){
        if(arr[i]>arr[j]){

            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp

        }
    }
}
return arr;
}

const abc=selectionSort(arr);
console.log(abc,"abc");