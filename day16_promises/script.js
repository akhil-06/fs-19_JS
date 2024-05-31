//async await
async function tellJoke() {
  try {
    let joke = await fetchRandomJoke();
    let translatedJoke = await translateJoke(joke);
    let postJoke = await postSingleJoke(translatedJoke);
  } catch (e) {
    console.log("Error", e);
  }
}

//promises
// fetchRandomJoke()
// .then((joke)=>{
//     console.log(joke);
//     return translateJoke(joke);
// })
// .then((translatedJoke)=>{
//     console.log(translatedJoke);
//     return postJoke(translatedJoke);
// })
// .then(()=>{
//     console.log("Joke is posted successfully");
// })
// .catch((error)=>{
//     console.log('something went wrong',error);
// })

// callback hell
// fetchRandomJoke((joke) =>{
//     console.log(joke);

//     translateJoke(joke, (translatedJoke)=>{
//         console.log(translatedJoke);

//         postJoke(translatedJoke, ()=>{
//             console.log("Joke posted successfully!!!");
//         })
//     })
// })

// let userLoggedIn = true;

// function userLoggeddIn(){
//     let promise = new Promise(function(res, rej){
//         if(userLoggedIn === true){
//             setTimeout(function(){
//                 res();
//                 }, 1000);
//         }else{
//             rej('user is not loggedIN');
//         }
//     });
//     return promise;
// }

// userLoggeddIn()
// .then(function(){
//     console.log("user is loggedIN");
// })
// .catch(function(data){
//     console.log(data);
// })
// console.log(promise);

// // console.log("hello world!!");

// setTimeout(function(){
//     console.log("SetTime1 is finished!!!");
// }, 5000)

// setTimeout(function(){
//     console.log("SetTime2 is finished!!!");
// }, 3000)

// setTimeout(function(){
//     console.log("SetTime3 is finished!!!");
// }, 6000)

// fetchRandomJoke((joke) =>{
//     console.log(joke);

//     translateJoke(joke, (translatedJoke)=>{
//         console.log(translatedJoke);

//         postJoke(translatedJoke, ()=>{
//             console.log("Joke posted successfully!!!");
//         })
//     })
// })
