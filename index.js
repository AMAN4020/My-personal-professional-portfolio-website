// portfolio tabbed component 
const p_btns  = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click', (e)=>{
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    p_btn.forEach((curElem)=>{curElem.classList.remove("p-btn-active")});

    p_btn_clicked.classList.add("p-btn-active");

    //to find the number in data attribute
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    
    p_img_elem.forEach((curElem)=>curElem.classList.add("p-image-not-active"));

    img_active.forEach((curElem)=>curElem.classList.remove("p-image-not-active"));
    
});

// swapper js code 
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
