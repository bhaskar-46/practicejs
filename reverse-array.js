function rever(arr){
    let temp=0;
    for(let i=0,j=arr.length-1;i<j;i++,j--){
         temp=arr[i];
         arr[i]=arr[j];
         arr[j]=temp;
    }
    return arr;
}




var arr=[10,65,34,89,15];
var res=rever(arr);
console.log(res);