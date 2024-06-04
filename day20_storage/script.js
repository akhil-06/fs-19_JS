const myArray = [
  {
    name: "Apple",
    color: "Red",
    price: 1.25,
  },
  {
    name: "Banana",
    color: "Yellow",
    price: 0.79,
  },
  {
    name: "Orange",
    color: "Orange",
    price: 1.0,
  },
  {
    name: "Grapefruit",
    color: "Pink",
    price: 1.5,
  },
  {
    name: "Kiwi",
    color: "Green",
    price: 2.0,
  },
];
let arrStrigify = JSON.stringify(myArray);
localStorage.setItem("arr", arrStrigify);
// console.log(JSON.parse(localStorage.getItem("arr")));

// console.log("ksdjbfv");
//setitem, getitem, removeitem, clear
// localStorage.setItem("Akhil", 22)
// localStorage.setItem("Marks", 202);

// localStorage.getItem("Akhil");

// localStorage.removeItem("Akhil");

// localStorage.clear()

// let arr = [1,2,3,4,5,6,7];
// let stringifyArr = JSON.stringify(arr);
// // console.log(stringifyArr);
// localStorage.setItem("arr", stringifyArr);
// console.log(JSON.parse(localStorage.getItem("arr")));
// console.log(localStorage.getItem("arr"));
