const arr=[13,46,24,52,20,9];
// in this adjacent  swap occurs 
for (let i=0;i<arr.length;i++){
    let temp;
    for(let j=0;j<arr.length-1-i;j++){
        console.log(i,"i value");
        if(arr[j]>arr[j+1]){
            console.log(arr[j],"j",arr[j+1],"j+1")
            temp=arr[j];
            arr[j]=arr[j+1]
            arr[j+1]=temp

        }

        
      

    }
    console.log(arr,"arr after each loop");
}

console.log(arr,"arrr in increasing order");