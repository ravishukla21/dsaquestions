const arr=[13,46,24,52,20,9];
//find the minimum and swap it with other this is the technique for selection sort
for(let i=0;i<arr.length-1;i++){
    for(let j=i;j<arr.length;j++){
        let temp
        if(arr[i]>arr[j]){
            temp=arr[j];
            arr[j]=arr[i];  
            arr[i]=temp;

        }
    }
}
console.log(arr,"arr sorted");