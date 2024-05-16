// console.log("kjadsgfv");
// var x = 10;
        // 0  1  2  3  4  5
// let arr = [10,20,30,40,50,60];
// console.log(arr[3]);
// console.log(arr);
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// dynamic sizing, heterogenous in nature
// let arr = [1,2,34,3,563,true, null,"kjsdgf", false, 8463,undefined]

let playerInfo = [
    {name:"Akhil", score:100},
    {name:"Varun", score:800},
    {name:"Abu", score:90},
    {name:"Aman", score:200},
    {name:"Basit", score:50},
    {name:"Kishlay", score:10},
    {name:"Anas", score:150},
];

let players = ["Akhil", "yatik", "sonu","Monu"];
delete players[2];
console.log(players[2]);


// let string1 = "Akhil, yatik, * sonu, monu, varun";
// let stringToArr = string1.split("a");
// console.log(stringToArr);



// let players = ["Akhil", "yatik", "sonu","Monu"];
// // let playerString = players.join("****### ");
// console.log( playerString);



//some:- array.some(callback)
// function check90(obj){
//     console.log(obj);
//     if(obj.score > 90){
//         return true;
//     }else{
//         return false;
//     }
// }

// let into = playerInfo.some(check90)
// console.log(into);





// console.log(playerInfo.reverse());
// let subInfo = playerInfo.splice(1);
// console.log(playerInfo);
// console.log(playerInfo);
//arr.splice(startIndex, deletionCount, Elements you want to insert at that position u have deleted)



// let subInfo = playerInfo.slice(1,4);
// console.log(subInfo);



// playerInfo.unshift(
//     {name:"niharika", score:202}
// )
// playerInfo.shift()
// console.log(playerInfo);
// console.log(playerInfo[4].name)