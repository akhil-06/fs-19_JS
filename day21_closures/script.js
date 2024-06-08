// console.log("hello world");
let counter = 0;

function getData() {
  console.log("encountered " + counter);
}

function mydebounceFunc(call, delay) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, delay);
  };
}

let betterFunction = mydebounceFunc(getData, 300);

// let counter = 0;
// function outer() {
//   let x = 10;
//   function inner() {
//     var y = 5;
//     // x = 30;
//     // x = x+30;
//     console.log(x++);
//   }
//   // x = 20;
//   return inner;
// }
// var innerFunc = outer();
// innerFunc();
// innerFunc();

// function incresevalue() {
//   let counter = 0;
//   let result = 5;
//   return function plus() {
//     counter = counter + 1;
//     result+=1;
//     return {counter,result};
//   }
// }

// let ans = incresevalue();
// console.log(ans().counter);
// console.log(ans().counter);
// console.log(ans().result);
// console.log(ans().result);

// let ans1 = incresevalue()
// console.log(ans1());
// console.log(ans1());

// document.getElementById("demo").innerHTML =
//   "this counter is:- " + incresevalue();

// let a = 10;
// function outer(){
//     let b = 20;
//     console.log(a++);
//     function inner(){
//         console.log(++a,--b);
//         let c = 30;
//         c++;a--;b--;b++;
//         console.log(a,b,c);
//         function innerMostFuc(){
//             let d = 40;
//             c++;a--;b--;b++;d--;
//             console.log(++a,--b,c--,++d);
//         }
//         innerMostFuc();
//     }
//     inner();
// }
// outer();
