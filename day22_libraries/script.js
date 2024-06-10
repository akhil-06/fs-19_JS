// console.log("Hello OWlrd!!");
let ball = document.getElementById("div1");
// // console.log(ball);
// anime({
//     targets: ball,
//     translateX: 250,
//     backgroundColor: 'red',
//     duration: 4000,
//     loop:true,
//     easing:"easeInOutSine"
//   });

  anime({
    targets: ball,
    width: '100%', // -> from '28px' to '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
  });
  

// anime({
//     targets: '.div1',
//   translateX: 250,
//   duration: 3000,
//   loop:true,
//   easing:"easeInOutSine"
// })