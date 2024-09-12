console.log(document.body.firstChild);
a = document.body.firstChild;
console.log(a.parentNode);
console.log(a.parentElement);

const bgred = ()=>{
  document.body.firstElementChild.style.background = "yellow";
}
bgred();

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

Array.from(document.getElementsByTagName ("li")).forEach((element) => {
  element.style.background ="red";
});
