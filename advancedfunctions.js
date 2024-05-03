/*model-1--------------------------------*/ 
// var add=function(x,y){
//     sum=x+y;
//     return sum;
// }
// var res=add(4,5);
// console.log(res);

/*model-1------------------------------------------------- */
// var func= function(fun,x,y){
//     var ret=fun(x,y);
//     return ret;
// }
// var add=function(x,y){
//     sum=x+y;
//     return sum;
// }
// var sub=function(){
//     console.log("in subtraction :");
//     return function(x,y){
//         let sum1=x-y;
//         return sum1;
//     };
// }
// var resul=func(add,4,5);
// console.log(resul);
// var eve=sub();
// var re3=eve(10,5);
// console.log(re3);


/*model-3 ----- arrow function-------------------------------------- */

var add=(x,y)=>{
    sum=x+y;
    return sum;
}
var res=add(4,5);
console.log(res);