let APIKEY = "AIzaSyCoPF310udRmpGMKfqi8BYnuriY7vzFdSY"






// console.log("hello !!!");
let div = document.getElementById("image");
let btn = document.getElementById("btn");
console.log(div, btn);

async function fetchData() {
  try {
    let fetchTheData = await fetch("https://dog.ceo/api/breeds/image/random");
    // console.log(fetchTheData);
    let data = await fetchTheData.json();
    // console.log(data.message);
    let imgURl = data.message

    let img = document.createElement("img");
    img.src = imgURl;
    div.innerHTML = "";
    div.appendChild(img);

  } catch (e) {
    console.log("error", e);
  }
}

fetchData();

btn.addEventListener("click", fetchData);
// let fetchData = fetch("https://dog.ceo/api/breeds/image/random");
// // console.log(fetchData);

// fetchData.then((data)=>{
//     console.log(data.json());
// })
