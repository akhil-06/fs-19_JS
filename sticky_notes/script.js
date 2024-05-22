// console.log("hello world!!");
let btn = document.getElementById("button")
let text = document.getElementsByTagName("textarea")[0];
let color = document.getElementById("color");
let notes_conatiner = document.getElementById("notes_conatiner");
let message = document.getElementById("message")
// let text1 = document.querySelector("textarea");

function addNotes(){
    message.innerText = "";
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");

    div.appendChild(p);
    div.appendChild(cross_btn);

    cross_btn.innerText = "X";
    p.innerText = text.value;
    div.style.backgroundColor = color.value;
    // console.log(div);
    notes_conatiner.appendChild(div);

    text.value = "";
}

btn.addEventListener("click", addNotes);