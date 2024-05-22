
let categoryFilter = document.getElementById("category_filter")

let productList = document.getElementById("product_list");

// console.log(categoryFilter, productList);

categoryFilter.addEventListener("change", function(){
    let selectedCategory = categoryFilter.value;
    console.log(selectedCategory);

    //hide or show the products
    let products = document.querySelectorAll(".product");
    // console.log(products);
    products.forEach(function(product){
        let productCategory = product.getAttribute('data-category');
        // console.log(productCategory); 

        if(selectedCategory === productCategory || selectedCategory === "all"){
            product.style.display = "block";
        }else{
            product.style.display = "none";
        }
    })
})









// function sum(){
//     console.log(2+3);
// }


// let div = document.querySelector("div");
// // console.log(div);
// div.addEventListener("click", function(event){
//     // console.log(event);
//     if(event.target.innerText === "Button 3"){
//         sum();
//     }
//     // console.log(event)
// })


// let buttonArray = document.querySelectorAll("button");
// // console.log(buttonArray);
// buttonArray.forEach(function(button){
//     // console.log(button);
//     button.addEventListener("click", function(){
//         console.log("button is clicked!!!");
//     })
// })









// let div = document.querySelector("div");
// div.addEventListener("click", function(event){
//     if(event.target.tagName === "BUTTON"){
//         console.log(event.target.innerText);
//     }
//     if(event.target.innerText === "Button 5"){
//         console.log("Button 5 is clciked!!!!");
//     }
// })





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