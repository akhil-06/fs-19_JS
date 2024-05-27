//asynchronous requests

function f3(){
    // console.log("f3");
    for(let i=0;i<10000000;i++){

    }
    console.log("loop end");
}

function printMe(){
    console.log('print me');
}

function test(){
    console.log("test");
}

function main(){
    // console.log("dfjvh");
    f3()
    setTimeout(test, 3000);
    setTimeout(printMe, 2000);
}

main();




// test()


// function f1(){
//     console.log("f1");
// }

// function f2(){
//     console.log("f2");
// }

// function main(){
//     console.log("main");
//     setTimeout(f1, 0);
//     f2();
// }

// main();



// console.log("start");

// setInterval(function(){
//     console.log("set time out printed!!!");
// }, 2000);

// console.log("end!!!");














//synschronous example

// console.log("Start!!!");

// function fn1(){
//     console.log("fn1 started!!");

//     for(let i=0;i<1000000000;i++){

//     }

//     console.log("fn1 ended!!");
// }

// function fn2(){

//     console.log("fn2 started!!");

//     for(let i=0;i<1000000000;i++){

//     }

//     console.log("fn2 ended!!");
// }

// fn1();
// fn2();

// console.log("end");