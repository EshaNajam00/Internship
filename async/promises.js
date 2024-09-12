// creating promise
new Promise (function(resolve, reject){
  setTimeout(function(){
    console.log('async task ');
    resolve()
  },1000)

}).then(function(){
  console.log('async 2 resolved')
})
  
// data consumption
const promiseThree = new Promise(function(resolve,reject)
// resolve diectly connected to our then
{
  setTimeout(function(){
    console.log('promiseThree');
    resolve({usernam :'esha', email:'esha@gmail.com'})
  },1000)

})
promiseThree.then(function(user){
  console.log(user);

})

// four promise
const promisefour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({username:'eshaaaa four promise', password:'123'});
    }else{
      reject('ERROR: somethng went wrong')
    }
  },2000
)})
// jo bi uper kam howa ha uski value return hoti ha yanahn py
promisefour.then((user)=>{
  console.log(user);
  return user.username;
  // we can asccess this user in next .then function
}).then((username)=>{
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(()=>{
  console.log('the promise is either resolve or rejected!!')
})



// promise five
const promisefive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false;
    if (!error){
      resolve({subject:'javascript', code:'JS401'});
      // console.log()
    }else{
      reject('Error: error in promise five');
    }
  } , 2000)

})
// now here we also can use asyn await instead of  .then
// async await : kaam ho jaye tu thk warna wohin pyy error dyy deta ha

async function consumePromisefive() {
  try{
    const response = await promisefive
    console.log(response,'hell');
  } catch(error){
    console.log(error);
  }
}
consumePromisefive();
// we can do this in both ways
// promisefive.then(function(user){
//   console.log(user);
//   return  user.subject;
// }).then(function(subject){
//   console.log(subject);
// }).catch(function(error){
//   console.log(error);
// }).finally(function(){
//   console.log('the promise is either resolve or rejected in Promisefive!!')
// })

async function getUsers() {
  try {
    const response =   await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log('async await') 
    console.log(data);
  } catch (error) {
    console.log('E:',error)
  }
}
 getUsers();
// same function with .then
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
  return response.json()
}).then(function(data){
  console.log(data);
}).catch((error)=> console.log(error))

