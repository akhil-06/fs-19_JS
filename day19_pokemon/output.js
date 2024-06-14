function hoistExample() {
  console.log("Before: ", a);
  var a;
  a = 10;
  console.log("After: ", a);
}
hoistExample();






