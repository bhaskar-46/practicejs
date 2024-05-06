exports.rever =function rever(arr){
    let temp=0;
    for(let i=0,j=arr.length-1;i<j;i++,j--){
         temp=arr[i];
         arr[i]=arr[j];
         arr[j]=temp;
    }
    return arr;
}

// module.exports.rever = rever;
