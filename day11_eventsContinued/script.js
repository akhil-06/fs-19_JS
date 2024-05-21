let div = document.querySelector("div");
div.addEventListener("click", function(event){
    if(event.target.tagName === "BUTTON"){
        console.log(event.target.innerText);
    }
    if(event.target.innerText === "Button 5"){
        console.log("Button 5 is clciked!!!!");
    }
})





// let buttons = document.querySelectorAll("button");

// buttons.forEach(function(button){
//     button.addEventListener("click", function(event){
//         console.log("button clicked!!!", event.target.innerText);
//     })
// })












// let div1 = document.getElementById("div1");
// let div2 = document.getElementById("div2");
// let div3 = document.getElementById("div3");

// // console.log(div1, div2, div3);

// div1.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("div1 clicked");
// });

// div2.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("div2 clicked");
// });

// div3.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("div3 clicked");
// });


















// // console.log("hello");
// let incrementButton = document.querySelector(".increment_button");

// let decrementButton = document.querySelector(".decrement_button");

// let display = document.getElementById("quantity");

// let counter = 1;

// decrementButton.addEventListener("click", function(){
//     if(counter > 1){
//         counter--;
//         displayUpdatedValue()
//     }
// })

// incrementButton.addEventListener("click", function(){
//     counter++;
//     // console.log(counter);
//     displayUpdatedValue();
// })

// function displayUpdatedValue(){
//     display.textContent = counter;
// }


// // console.log(incrementButton, decrementButton, display);