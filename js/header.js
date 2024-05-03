window.addEventListener("load",()=>{
const headerWrap = document.querySelector(".headerWrap");
console.log(headerWrap);
const h1 = document.querySelector("h1");
console.log(h1);
const gnblis = document.querySelectorAll(".gnb>ul>li");
console.log(gnblis);
const boardul = document.querySelector(".gnb>ul>li>.boardul");
console.log(boardul);
h1.addEventListener("mouseover",e=>{
  headerWrap.classList.add("on");
})
h1.addEventListener("mouseout",e=>{
  if(document.querySelector('html').scrollTop<=180){
    headerWrap.classList.remove("on");
  }  
})
gnblis.forEach((gnbli,i) => {
  gnbli.addEventListener("mouseover",e=>{
    headerWrap.classList.add("on");
    if(e.currentTarget == gnblis[1]){
      boardul.classList.add("on");
    }else{
      boardul.classList.remove("on");
    }
  })
  gnbli.addEventListener("mouseout",e=>{
    if(document.querySelector('html').scrollTop<=180){
      headerWrap.classList.remove("on");
    }  
    boardul.classList.remove("on");
  })
});

document.addEventListener("scroll",e=>{
  let scrolls = document.querySelector('html').scrollTop;
  if(scrolls<=180){
    headerWrap.classList.remove("on");
  }else{
    headerWrap.classList.add("on");
  }
})

const menubt = document.querySelector(".menubt");
const mobwarp = document.querySelector(".mobwrap");
const mobul = document.querySelector(".mobul");

console.log(menubt);
console.log(mobwarp);
console.log(mobul);

menubt.addEventListener("click",e=>{
  e.preventDefault();
  mobwarp.classList.toggle("on");
  mobul.classList.toggle("on");
})
})