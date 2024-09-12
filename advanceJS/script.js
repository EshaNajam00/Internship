// // this is asyn code 
// console.log("one");
// console.log("two");
// //  
// setTimeout(()=>{
//   console.log("this code will execute after 3 second -also does not affect on the code we are executing after this code")
// },3000);

// console.log("three");
// console.log("four");


// // callback hell : this code is not a good good beacuse not everyone cn undertand it even developers
// function getData(dataId,getNextData){
//   setTimeout(()=>{
//     console.log('data',dataId);
//     if(getNextData){
//       getNextData();
//     }
//   },2000)
// }

// // callback hell: nested callbacks --> this style of programming become difficult to understnd and manage
// getData(1,()=>{
//     console.log("getting data 2......");
//   getData(2,()=>{
//      console.log("getting data 3......");
//     getData(3,()=>{
//       console.log("getting data 4......");
//       getData(4,()=>{
//         console.log("getting data 5......");
//         getData(5,()=>{
//           console.log("getting data 6......");
//           getData(6,()=>{

//           })
//         })
//       })
//     })
//   })
// })

// // to solve callback hell : promises
// function getData2(dataid){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log('data',dataid);
//       resolve('success');
//     },4000);
//   });
// }
// // promises chaining
// console.log('getting data 1...promise chain');
// getData2(1)
// .then((res)=>{
//   console.log('geeting data 2.......promise chain');
//   return getData2(2);
// })
// .then((res)=>{
//   console.log('geeting data 3.... promise chain');
//   return getData2(3);
// })
// .then((res)=>{
//   console.log(res);
// })

// asyn await
function api() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('weather data');
      resolve(200);
      // reject(Error);
    },2000);
  });
}
// async function getWeatherData(){
//   await api( ); //1st
//   await api();//2nd call
// }
// getWeatherData();

// async function : in IIFE hamain call ni karna paraa function ko --> kud hi execute ho gayaaf
(async function () {
  await api() ; //1st
  await api();//2nd call
})();