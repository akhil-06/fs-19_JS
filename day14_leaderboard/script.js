let section2 = document.querySelector(".section2");

let fname = document.querySelector(".fname")
let lname = document.querySelector(".lname")
let pcountry = document.querySelector(".country")
let pscore = document.querySelector(".number")
let button = document.querySelector("button");

let data = [
    // {
    //     firstName:"Ajay",
    //     lastName:"Sundar",
    //     country:"India",
    //     score:200
    // },
    // {
    //     firstName:"Himanshu",
    //     lastName:"Upadhayay",
    //     country:"India",
    //     score:300
    // }
]

button.addEventListener('click', function(e){
    e.preventDefault();
    if(pcountry.value === "" || fname.value === "" || lname.value === "" || pscore.value === ""){
        alert("Please fill all the fields");
    }else{
        let playerObj = {
            firstName:fname.value,
            lastName:lname.value,
            country:pcountry.value,
            score:pscore.value
        };

        data.push(playerObj);
        updateData();
        fname.value = "";
        lname.value = "";
        pcountry.value = "";
        pscore.value = "";
    }
})

function updateData(){
    data.sort(function(p1, p2){
        return p2.score - p1.score;
    })
    let showData = "";
    data.forEach(function(item){
        // console.log(item);
        showData +=`
        <div class = "button_group">
        <span>${item.firstName}</span>
        <span>${item.lastName}</span>
        <span>${item.country}</span>
        <span>${item.score}</span>
        <button class = "del">X</button>
        <button class = "but1">+5</button>
        <button class = "but2">-5</button>
        </div>
        `
    })
    section2.innerHTML = showData;
    activateButtons();
}

function activateButtons(){
    // console.log(document.querySelector(".button_group"));
    document.querySelectorAll(".button_group").forEach(function(el,index){
        // console.log(el);
        el.addEventListener("click", function(e){
            console.log(e);
            if(e.srcElement.classList.value === 'but1'){
                data[index].score += 5;
            }else if(e.srcElement.classList.value === 'but2'){
                data[index].score -= 5;
            }else if(e.srcElement.classList.value === 'del'){
                data.slice(index,1);
            }
        })
    })
}

window.addEventListener('load', updateData);