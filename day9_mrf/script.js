// forEach, map, reduce, filter, sort
let numbers = [10,100,2000,30,54,55,24,40];

//reduce
let sum = numbers.reduce(function(acculumator, currentValue){
    return acculumator * currentValue;
}, 1)

console.log(sum);



//sort
// console.log(numbers.sort(function(a,b){
//     return b-a;
// }));



//filter
// let arr = numbers.filter(function(currentValue, index, arr){
//     return currentValue%10 === 0;
// });

// console.log(arr);





// numbers.forEach(function(currentValue, index, arr){
//     // console.log(currentValue, index, arr);
//     currentValue = currentValue * 2;
//     // console.log(currentValue);
//     // return currentValue;
// })

// console.log(newArr);
// console.log(numbers);
// numbers.forEach(function(currentValue, index, arr){
//     console.log(currentValue, index, arr);
// })

// for(let i = 0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }





// let a = 10;
// let b = 20;
// function sum(a1,b1){
//     let sum = a1+b1;
//     console.log(sum);
// }
// sum(a,b);


// function d(){
//     console.log("d");
// }
// function c(){
//     d();
//     console.log("c");
// }
// function b(){
//     c();
//     console.log("b");
// }function a(){
//     b();
//     console.log("a");
// }
// a();
// console.log("global");




// var l = 2;
// var w = 3;

// function calculate(length, width){
//     var area = length * width;
//     return area;
// }

// var rectangleArea = calculate(l, w);
