/*---------------  Anonymous fun && Group function && self invokation fun -----------------------------------------------*/
// var result = (function(x,y){
//     return x + y;
// })(5,6);//revok
// console.log("result :", result);

/*-----------------------  call back  --------------------------------------*/
// function print(x) {
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }
//     console.log(x);
// }
// function write(y) {
//     console.log(y)
//     y()
// }
// write(print);

/*-----------------------  arrow function ------------------------------------------- */
// var a = 12;
// var add = (x, y)=> {
//     var z = x + y;
//     return z;
// }
// var result = add(2, 5);
// console.log(result);

/*------------------call back -----------------------------------*/
// function f1(x) {
//     console.log(x);
//     x(10, 34, 78);
// }
// var f2 = function (a, b, c) {
//     console.log("hii", a, b, c)
//     console.log("inside f2");
// };
// f1(f2);

/*-------------closure function-----------------*/
function outerFunction(x) {
    console.log("outer function....");

    function innerFunction(y) {
      return x + y;
    }
    console.log("below inner function..")
    return innerFunction;
  }
  
  const addFive = outerFunction(5);
  var result = addFive(10);
  console.log(result); // 15