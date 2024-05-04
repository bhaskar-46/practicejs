function add(x,y){
    return x+y;
}
function sub(x,y){
    return add(x,y);

}
function fun(z,x,y){
    console.log("i am in function to call function with given parameters");
    return z(x,y);
}

var z=fun(add,2,3);
console.log(z);
var g=fun(sub,10,5);
console.log(g);


function f1(){
    console.log("inside f1..");
    return function(){
        console.log("side inner fun of f1");
        return "krishna";
    }
}

var f3 = f1();
console.log(f3);
var name = f3();
console.log(name);