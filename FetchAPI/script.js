const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector('#fact');
console.log("getting data....");
const btn = document.querySelector('#btn');

const getfacts = async()=>{
  console.log("getting data....");
  // fetch API data ly kar aai
  let respone = await fetch(URL);
  console.log(respone); //data in JSON format
  let data = await respone.json();//now data is in readable form
  factpara.innerText = data[0].text;
};

// // with promises
// function getfacts(){
//   fetch(URL)
//   .then((res)=>{
//     return res.json();
//   })
//   .then((data)=>{
//     console.log(data);
//     factpara.innerText = data[0].text;
//   });
// }


// getfacts(); 
btn.addEventListener('click',getfacts);