//========================
//creating responsive navbar component
//=========================
const mobile_nav = document.querySelector(".mobile-navbar-btn")
const headerEle = document.querySelector(".header")

mobile_nav.addEventListener('click', ()=>{
  headerEle.classList.toggle('active')
});


// portfolio tabbed component 
const p_btns  = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click', (e)=>{
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    if(! p_btn_clicked.classList.contains('p-btn')) return;

    p_btn.forEach((curElem)=>{curElem.classList.remove("p-btn-active")});

    p_btn_clicked.classList.add("p-btn-active");

    //to find the number in data attribute
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    
    p_img_elem.forEach((curElem)=>curElem.classList.add("p-image-not-active"));

    img_active.forEach((curElem)=>curElem.classList.remove("p-image-not-active"));
    
});

// swipper js code 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// media query for swipper
const width_Size = window.matchMedia('(max-width: 780px)');

const myjsmedia = (width_Size)=>{
  if(width_Size.matches){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
  else{
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
}


//listener function
myjsmedia(width_Size);

width_Size.addEventListener('change', myjsmedia);


// scroll to top button 
const heroSection = document.querySelector(".section-hero");

const footerEle = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerEle.after(scrollElement);

const scrollTop = ()=>{
  heroSection.scrollIntoView({behavior:"smooth"})
};

scrollElement.addEventListener("click", scrollTop);

//========================
//creating a stiky responsive navbar
//=========================
const observer = new IntersectionObserver((entries)=>{
  const ent = entries[0];
  console.log(ent);
  !ent.isIntersecting ? document.body.classList.add("sticky") : document.body.classList.remove("sticky");
}, {
  root: null,
  threshold: 0,
})

observer.observe(heroSection);


const workSection = document.querySelector('.section-work-data');
const workobserver = new IntersectionObserver((entries, observer)=>{
  const [entry] = entries;
  // console.log(entry);
  if(!entry.isIntersecting) return;

  //animate number

const counternum = document.querySelectorAll(".counter-number");

const speed = 5;

counternum.forEach((curElem)=>{
const  updateNumber=()=>{
  const targetNum = parseInt(curElem.dataset.numbers);
  // console.log(targetNum);
  const initialNum = parseInt(curElem.innerText);
  // console.log(initialNum);

  const increment = Math.trunc(targetNum/speed);
  // console.log(increment);

  if(initialNum < targetNum){
    curElem.innerText = `${initialNum + increment}+`;
    setTimeout(updateNumber, 1000);
  }
};

  updateNumber();

  observer.unobserve(workSection);
});
}, {
  root: null,
  threshold: 0,
})
workobserver.observe(workSection);

