const red=require('readline');
const r1=red.createInterface({
    input : process.stdin,
    output :process.stdout
});

r1.question("enter value : ",function(n){
     let res=pattern(n);
     console.log(res);
     r1.close();
});

function pattern(n){
    for(let i=0;i<=n;i++)
    {
        for(let j=0;j<n-1;j++)
        {
            let str1=" ";
            console.log(str1.repeat(j));
        }
        for(let k=0;k<i;k++)
        {
            let str="*";
            console.log(str.repeat(k));
        }
    }
}