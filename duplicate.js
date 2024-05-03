var arr=[10,20,30,10,20,30,40];
duplicate(arr);


function duplicate(arr)
{
     var arr1=[];
     let k=0;
    for(let i=0;i<arr.length;i++)
        {
            for(let j=i+1;j<arr.length;j++)
                {
                    if(arr[i]==arr[j])
                        {
                            arr1[k]=arr[i];
                            k++;
                        }
                }
        }

    for(let i=0;i<arr1.length;i++)
        {
            console.log(arr1[i]);
        }

}