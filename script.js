// const { tns } = require("tiny-slider");

// image slider

let slider = tns({
    container: '.my-slider',
    "slideBy": '1',
    "speed": 400,
    "nav": false,
    autowidth: true,
    loop: true,
    autoplay: false,
    controls: true,
    autoplayButtonOutput: true,
    responsive: {
        1000: {
            items: 3
        },
        800: {
            items: 1
        }
    }
})

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });

// fetch images for slider
let loadImgBtn = document.getElementById("loadImgBtn");
let getSlider = document.querySelector(".my-slider");
let slideOne = document.getElementById("slide-one");
let slideTwo = document.getElementById("slide-two");
let slideThree = document.getElementById("slide-three");
// let slideFour = document.getElementById("slide-four");

function getFirstThreeImages(){
    console.log("click");
    fetch('https://api.thecatapi.com/v1/images/search', 
        {headers: {
            'x-api-key':'863d2870-6544-4ed7-a15a-c024729f17ed', 
        }})
        .then((res) => res.json())
        .then((data) => slideOne.innerHTML = `<img src=${data[0].url}>`)
    
    fetch('https://api.thecatapi.com/v1/images/search', 
        {headers: {
            'x-api-key':'863d2870-6544-4ed7-a15a-c024729f17ed', 
        }})
        .then((res) => res.json())
        .then((data) => slideTwo.innerHTML = `<img src=${data[0].url}>`)

    fetch('https://api.thecatapi.com/v1/images/search', 
        {headers: {
            'x-api-key':'863d2870-6544-4ed7-a15a-c024729f17ed', 
        }})
        .then((res) => res.json())
        .then((data) => slideThree.innerHTML = `<img src=${data[0].url}>`)
};

getFirstThreeImages();

const getNewImage = () => {
    console.log("click");
    fetch('https://api.thecatapi.com/v1/images/search', 
        {headers: {
            'x-api-key':'863d2870-6544-4ed7-a15a-c024729f17ed', 
        }})
        .then((res) => res.json())
        .then((data) => {
            slider.destroy();
            getFirstThreeImages();
            getSlider.insertAdjacentHTML("afterend", `<div class="slide"><img src=${data[0].url}></div>`);
            slider.rebuild();
        })
    }

loadImgBtn.addEventListener('click', getNewImage);

// back button
backBtn = document.getElementById("back-btn");

const myScrollFunc = () => {
  let y = window.scrollY;
  if (y >= 100) {
    backBtn.className = "btn"
  } else {
    backBtn.className = "btn hidden"
  }
};

window.addEventListener("scroll", myScrollFunc);