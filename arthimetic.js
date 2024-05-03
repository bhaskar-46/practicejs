let a=10;
let b=5;
arthematic(a,b);

for(let i=0;i<10;i++)
{
    console.log(i);
}

function arthematic(a,b){
    let add=a+b;
    let sub=a-b;
    let mul=a*b;
    let div=a/b;
    let f=++a;
    console.log(add);
    console.log(sub);
    console.log(mul);
    console.log(div);
    console.log("a++ : ",f);
    console.log("b-- : ",--b);
    console.log(a%b);
    console.log(a+=b);
    console.log(a*=b);
    console.log(a/=b);//a=a/b
    console.log("-----------------------");
    
}

console.log(a&b);