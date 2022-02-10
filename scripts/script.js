// image slider
let $owl = $('.owl-carousel').owlCarousel({
    loop: false,
    rewind: true,
    margin:0,
    center: false,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    // itemsDesktop: [1199,3],
    // itemsDesktopSmall: [979,3],
    // itemsTablet: [768,3],
    // itemsMobile: [279,1],
    responsive:{
        0:{
            items: 1,
        },
        750:{
            items:3
        }
    }
})

// responsive burger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-link-list");
const getOwlCarousel = document.querySelector(".owl-carousel");
const getOwlStage = document.querySelector(".owl-stage-outer");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    getOwlStage.classList.toggle("hidden");
    getOwlStage.classList.toggle("moveBack");
    getOwlCarousel.classList.toggle("hidden");
    // getOwlCarousel.classList.toggle("moveBack");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    getOwlStage.classList.remove("hidden");
    getOwlStage.classList.remove("moveBack");
    getOwlCarousel.classList.remove("hidden");
    // getOwlCarousel.classList.remove("moveBack");
}

let loadImgBtn = document.getElementById("loadImgBtn");
let slideOne = document.getElementById("slide-one");
let slideTwo = document.getElementById("slide-two");
let slideThree = document.getElementById("slide-three");
const getSlider = document.querySelector("#owl-demo");

// fetch images for slider
(function getFirstThreeImages(){
    console.log("click");
    fetch('https://api.thecatapi.com/v1/images/search', 
        {headers: {
            'x-api-key':'863d2870-6544-4ed7-a15a-c024729f17ed', 
        }})
        .then((res) => res.json())
        .then((data) => {
            urlOne = data[0].url;
            slideOne.innerHTML = `<img src=${data[0].url}><p>Age:${Math.floor((Math.random() * 9) + 1)}</p>`
        })
    
    fetch('https://api.thecatapi.com/v1/images/search', 
        {headers: {
            'x-api-key':'863d2870-6544-4ed7-a15a-c024729f17ed', 
        }})
        .then((res) => res.json())
        .then((data) => {
            urlTwo = data[0].url;
            slideTwo.innerHTML = `<img src=${data[0].url}><p>Age:${Math.floor((Math.random() * 9) + 1)}</p>`
        })

    fetch('https://api.thecatapi.com/v1/images/search', 
        {headers: {
            'x-api-key':'863d2870-6544-4ed7-a15a-c024729f17ed', 
        }})
        .then((res) => res.json())
        .then((data) => {
            urlThree = data[0].url;
            slideThree.innerHTML = `<img src=${data[0].url}><p>Age:${Math.floor((Math.random() * 9) + 1)}</p>`
        })
})();

// get a new image
const getNewImage = () => {
    console.log("load button click");
    fetch('https://api.thecatapi.com/v1/images/search', 
        {headers: {
            'x-api-key':'863d2870-6544-4ed7-a15a-c024729f17ed', 
        }})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            $owl
            .owlCarousel('add', `<div class="slide"><img src=${data[0].url}><p>Age:${Math.floor((Math.random() * 9) + 1)}</p></div>`)
            .owlCarousel('update')
        })
    }

loadImgBtn.addEventListener('click', getNewImage);

// show back button 
backBtn = document.getElementById("back-btn");

let PageHeight = document.body.scrollHeight;
let halfPageHeight = PageHeight/2;

console.log(halfPageHeight)

const showBackButton = () => {
  let y = window.scrollY;
  if (y >= halfPageHeight) {
    backBtn.classList.remove('hidden')
  } else {
    backBtn.classList.add('hidden')
  }
};

window.addEventListener("scroll", showBackButton);

// scroll up when back button is clicked
const scrollToTop = () => {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0; 
    window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
}

backBtn.addEventListener('click', scrollToTop);
