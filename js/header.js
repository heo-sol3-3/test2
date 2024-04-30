window.addEventListener('load', ()=>{
const headerWrap = document.querySelector(".headerWrap");
console.log(headerWrap);

document.addEventListener("scroll",e=>{
  let scrolls = document.querySelector('html').scrollTop;
  if(scrolls<=180){
    headerWrap.classList.remove("on");
  }else{
    headerWrap.classList.add("on");
  }
})
});