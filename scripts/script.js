// image slider
let $owl = $('.owl-carousel').owlCarousel({
    loop: false,
    rewind: true,
    margin:0,
    center: false,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    // itemsDesktop: [1199,3],
    // itemsDesktopSmall: [979,3],
    // itemsTablet: [768,3],
    // itemsMobile: [479,1],
    responsive:{
        0:{
            items: 1,
        },
        750:{
            items:3
        }
    }
})

let loadImgBtn = document.getElementById("loadImgBtn");
let getSlider = document.querySelector("#owl-demo");
let slideOne = document.getElementById("slide-one");
let slideTwo = document.getElementById("slide-two");
let slideThree = document.getElementById("slide-three");

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

// back button
backBtn = document.getElementById("back-btn");

let halfPageHeight = document.body.scrollHeight/2
console.log(halfPageHeight)

const myScrollFunc = () => {
  let y = window.scrollY;
  if (y >= halfPageHeight) {
    backBtn.className = "btn"
  } else {
    backBtn.className = "btn hidden"
  }
};

// scroll up when back button is clicked

// const scrollUp = () => {

// }

backBtn.addEventListener('click', getNewImage);

window.addEventListener("scroll", myScrollFunc);