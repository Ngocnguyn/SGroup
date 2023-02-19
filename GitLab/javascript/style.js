//change style  left of element when changing window length
const navMain = document.querySelector('.navigation-dropdown__main')
const navMainLeft = navMain.getBoundingClientRect().left;
const navMainRight = navMain.getBoundingClientRect().right;


const leaderPanel = document.getElementById('leaderspanel');
      researchPanel = document.getElementById('researchpanel');
      tabLeader = document.getElementById('tab-leaders');
      tabResearch = document.getElementById('tab-research');
if(tabLeader){
    tabLeader.addEventListener('click', () => {
        tabLeader.classList.add('selected');
        tabResearch.classList.remove('selected');
        leaderPanel.classList.add('active');
        researchPanel.classList.remove('active');
    })
}
if(tabResearch){
    tabResearch.addEventListener('click', () => {
        researchPanel.classList.add('active');
        leaderPanel.classList.remove('active');
        tabLeader.classList.remove('selected');
        tabResearch.classList.add('selected');
    })
}
// Slideshow auto // 
const cardCarousel = document.querySelector(".card-carousel");
const cardImg = document.querySelectorAll(".card-img__image");
const progressbarContainer = document.querySelector(".progressbar-container");
const progressbar = document.querySelectorAll(".progressbar");
let current = 0;

cardImg.forEach((img, index) => {
  if (index !== current) {
    img.style.opacity = "0";
  }
});

setInterval(() => {
  cardImg[current].style.opacity = "0";
  current = (current + 1) % cardImg.length;
  cardImg[current].style.opacity = "1";
}, 5000);

const progressBars = document.querySelectorAll('.progressbar__time');
let i = 0;
setInterval(()=>{
  progressBars[i].classList.remove("active");
  i = (i + 1) % progressBars.length;
  progressBars[i].classList.add("active");
},5000)
// Click button id="search__desktop" to  section class='search' has display = block
const searchBtn = document.getElementById('search__desktop');
const searchSection = document.querySelector('.search');
searchBtn.addEventListener('click', () => {
  searchSection.style.display = 'block';
})
const searchBtn2 = document.getElementById('search__tablet');
searchBtn2.addEventListener('click', () => {
  searchSection.style.display = 'block';
});
const searchBtn3 = document.getElementById('search__mobile');
searchBtn3.addEventListener('click',() =>{
  searchSection.style.display = 'block';
})
// click button id="search__close" to section class="search" has display = none
const searchCloseBtn = document.getElementById('search__close');
searchCloseBtn.addEventListener('click', () => {
  searchSection.style.display = 'none';
})
const menuBtn = document.getElementById('menu__button');
const menuSection = document.querySelector('.menu');
const body = document.querySelector('body');
menuBtn.addEventListener('click', () => {
  menuSection.style.display = 'block';
  body.style.overflow = 'hidden'
})
const closeMenuBtn = document.getElementById('btn-menu-close')
closeMenuBtn.addEventListener('click', () => {
  menuSection.style.display = 'none';
  body.style.overflow = 'auto'
})

// click button id="quotes-btn-right" to quotes-carousel__content translateX= 1140px

const quotesCarouselContent = document.querySelector('.quotes-carousel__content');
const quotesCarouselRight = document.querySelector('#quotes-btn-right');
const quotesCarouselLeft = document.querySelector('#quotes-btn-left');
const lists = document.querySelectorAll('.quotes-carousel__content-item');


// Click btn-more
const btnMoreSolutions = document.querySelector('.slp-btn-more__solutions');
const menuBottom = document.querySelector('.menu-bottom');
const navMenuBottom = document.querySelector('.nav-menu-bottom');
const menuSolutions = document.querySelector('.menu-solutions');
btnMoreSolutions.addEventListener('click', () =>{
  menuBottom.style.display = 'none';
  navMenuBottom.style.display = 'none';
  menuSolutions.style.display = 'block';
  body.style.overflow = 'hidden';
  menuSection.style.overflowX = 'hidden';
})

const btnBackSolutions = document.querySelector('.slp-btn-back__solutions');
btnBackSolutions.addEventListener('click', () =>{
  body.style.overflow = 'hidden';
  menuSolutions.style.display = 'none';
  menuBottom.style.display = 'block';
  navMenuBottom.style.display = 'block';
});

const btnMoreResources = document.querySelector('.slp-btn-more__resources');
const menuResources = document.querySelector('.menu-resources');
btnMoreResources.addEventListener('click', () =>{
  menuBottom.style.display = 'none';
  navMenuBottom.style.display = 'none';
  menuResources .style.display = 'block';
  body.style.overflow = 'hidden';
  menuSection.style.overflowX = 'hidden';
});

const btnBackResources = document.querySelector('.slp-btn-back__resources');
btnBackResources.addEventListener('click', () =>{
  body.style.overflow = 'hidden';
  menuResources.style.display = 'none';
  menuBottom.style.display = 'block';
  navMenuBottom.style.display = 'block';
});

const btnMoreCompany = document.querySelector('.slp-btn-more__company');
const menuCompany = document.querySelector('.menu-company');
btnMoreCompany.addEventListener('click', () =>{
  menuBottom.style.display = 'none';
  navMenuBottom.style.display = 'none';
  menuCompany.style.display = 'block';
  body.style.overflow = 'hidden';
  menuSection.style.overflowX = 'hidden';
});

const btnBackCompany = document.querySelector('.slp-btn-back__company');
btnBackCompany.addEventListener('click', () =>{
  body.style.overflow = 'hidden';
  menuCompany.style.display = 'none';
  menuBottom.style.display = 'block';
  navMenuBottom.style.display = 'block';
});

const btnMoreContactus = document.querySelector('.slp-btn-more__contactus');
const menuContactus = document.querySelector('.menu-contactus');
btnMoreContactus.addEventListener('click', () =>{
  menuBottom.style.display = 'none';
  navMenuBottom.style.display = 'none';
  menuContactus.style.display = 'block';
  body.style.overflow = 'hidden';
  menuSection.style.overflowX = 'hidden';
});

const btnBackContactus = document.querySelector('.slp-btn-back__contactus');
btnBackContactus.addEventListener('click', () =>{
  body.style.overflow = 'hidden';
  menuContactus.style.display = 'none';
  menuBottom.style.display = 'block';
  navMenuBottom.style.display = 'block';
});