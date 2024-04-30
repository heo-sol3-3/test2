window.addEventListener('load', ()=>{
const sections = document.querySelectorAll("#container>section");
const snbul = document.querySelector(".snb>ul");
const snblis = document.querySelectorAll(".snb>ul>li");
const footer = document.querySelector("#footer");
let devHeight;
devHeight = window.innerHeight;
console.log(devHeight);


window.addEventListener('resize',()=>{
  devHeight = window.innerHeight;
});

snbul.addEventListener("mouseover",()=>{
  snbul.classList.add("on");
});

snblis.forEach((snbli,i) => {
  if(snbul.classList==(`on`));{
    snbli.addEventListener("mouseover",()=>{
      snbli.classList.add("on");
    })
    snbli.addEventListener("mouseout",()=>{
      snbli.classList.remove("on");
    })
    snbli.addEventListener("click",e=>{
      e.preventDefault();
      scrollTo(sections[i],i);
    })
  }
});

snbul.addEventListener("mouseout", ()=>{
  snbul.classList.remove("on");
})

sections.forEach((section,i) => {
  section.style.height = `${devHeight}px`
  document.addEventListener("scroll",e=>{
    let scrolls = document.querySelector('html').scrollTop;
    if(scrolls>=(i*devHeight) && scrolls<(i+1)*devHeight){
      activation(i,snblis);
    }
    if(scrolls<=180){
      snbul.style.opacity = '0';
    }else{
      snbul.style.opacity = `1`;
    }
  })
  
  let page = 0; //영역 포지션 초기값
  console.log(page);
  //근데 이럴 경우 snb를 이용해서 이동했을 시 페이지값이 추가되지 않아
  //페이지 스크롤링에 문제점이 생김
  window.addEventListener("wheel",e=>{
    e.preventDefault();
    if(e.deltaY > 0){
      if(page<sections.length){
        window.scroll({
          top:sections[page].offsetTop,
          behavior:"smooth"
        });
        page++;
      }else if(page=sections.length){
          window.scroll({
            top:footer.offsetTop,
            behavior:"smooth"
          });
          page=sections.length;
        }
      }else if(e.deltaY < 0){
        if(page==sections.length){
          page--;
          window.scroll({
            top:sections[page].offsetTop,
            behavior:"smooth"
          });     
        }else{
        window.scroll({
          top:sections[page].offsetTop,
          behavior:"smooth"
        });
        page--;
      }
        if(page<0){
          page=0;
        }
      };

  },{passive:false});
});




function MouseWheelHandler(e){
  let delta = 0;
  if(!e){e = window.event}
  if(e.wheelDelta){
    delta = ebent.wheelDelta / 120;
  }else if(e.detail){
    delta = -event.detail / 3;
  }
}


function activation(index,list){
  for(let el of list){
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}


function scrollTo(obj,i){
  let height = obj.offsetTop;
  snblis[i].classList.add("on");
  window.scroll({
    top:height,
    behavior:"smooth"
  });
}

});