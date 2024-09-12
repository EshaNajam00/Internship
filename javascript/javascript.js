let a = document.getElementsByTagName('div')[0]
a.innerHTML = a.innerHTML + '<h1>helooo world</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>heelooo</h1>';
a.appendChild(div);

// let div1 = document.getElementsByClassName('.second');

// second.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>'); 

// btn
// btn.addEventListener('click' , function(e){
// alert('helo');
// })
// btn.addEventListener('click' , function(e){
//   alert('helo2');
//   })

  // document.getElementById('google').addEventListener('click',function(){
  //   window.location = "http://www.google.com";
  //   win.focus();
  // })

  setInterval(async function() {
    document.querySelector("#bulb").classList.toggle("bulb")
  }, 150)

  console.log('hello');
  setInterval(async function() {
    document.querySelector("#red").classList.toggle("red")
  }, 100)

  console.log('hello');
  // date 
  let c = new Date();
  let h = c.getHours();
  let m = c.getSeconds();
  let s = c.getMinutes();
  document.write(h,m,s);
  console.log( h ,m, s);
