// let spentAmount = 600;
// if(spentAmount > 1000){
//     let discount = 0.10 * spentAmount;
//     console.log('You got a discount of ruppess:- ' + discount);
// }else if(spentAmount > 500){
//     let discount = 0.05 * spentAmount;
//     console.log('You got a discount of ruppess:- ' + discount);
// }else{
//     console.log("No discount is being given to you");
// }

//control statements
//for loop
// for(let i=0;i<10;i++){
//     console.log("Akhil Sharma");
// }

//while loop
// let j = 0;
// while(j<10){
//     console.log("Javascript Language Sessions");
//     j++;
// }

//do-while loop
// let z = 1;
// do{
//     console.log("Thankyou for attending sessioms");
//     z++;
// }while(z < 10)


// let b = 10;
//functions
// function sum(a, b){
//     // console.log(2+5);
//     let sum1 = a+b;
//     return sum1;
//     // console.log(a+b);
// }
// console.log(sum1);
// let ans = sum(2, 3);
// console.log(ans);

// var a1 = 90;

// function sum(){
//     const a = 30;
//     console.log(a1);
// }
// sum()
// console.log(a1);

// if(true){
//     var a = 80;
//     console.log(a);
// }

// console.log(a);




//Nested functions
let a = 10;
function outerFunc(){
    let b = 20;
    console.log(++a, b++);
    function innerFunc(){
        let c = 20;
        console.log(a++, ++b, --c);
        function innerMostFunc(){
            let d = 40
            console.log(--a, b--, c++, ++d);
        }
        innerMostFunc()
    }
    innerFunc()
}
outerFunc();