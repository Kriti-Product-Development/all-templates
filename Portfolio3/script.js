const menuTwo = document.querySelector('.side-menu');
const button = document.querySelector('#toggle_open');
const close_btn = document.querySelector('#toggle_close');

button.addEventListener('click', () => {
    menuTwo.classList.toggle('active');
});
menuTwo.addEventListener('click', () => {
    menuTwo.classList.toggle('active');
});

// RESPONSIVE MENU 

const menu_toggle = document.querySelector('#menu_bars'); 
const menuOne = document.querySelector('.menu'); 

menu_toggle.addEventListener('click' , () =>{
    menuOne.classList.toggle('show_menu');
});




// SWIPER SLIDERWS 

var swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: true,
});

// SERVICES SWIPER 

var swiper = new Swiper('.serviceSwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        500: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});
// BANNER SWIPER  

var swiper = new Swiper('.banner_swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay:true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 20,
        }, 
    },
});

// TESTIMONAILS SWIPER 

var swiper = new Swiper('.testimonial_wrap', {
    loop:true,
    autoplay:true,
});