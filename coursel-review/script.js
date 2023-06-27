window.onload=chooseImageRandomly
const rdm_btn=document.querySelector('#random')
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next-btn");
var currentSlide = 0;
var maxSlide = slides.length;

const title_=document.querySelector("#name-title")
const occupation_=document.querySelector('#occupation')
const bio_=document.querySelector('#biography')
const image_=document.querySelector('#image')
let img_array=[
   
    {
      title:'jack chan',
      occupation:'Movie Actor',
      bio:'Everyone knows Jackie Chan. Whether it’s from Rush Hour, Shanghai Noon, The Karate Kid, or Kung Fu Panda, Jackie is admired by generations of moviegoers for his acrobatic fighting style, comic timing, and mind-bending stunts.',
      image:'/images/Jackie-Chan.webp'
     

  
   },
    {
        title:'jet li',
        occupation:'Movie actor',
        bio:'In the early days of cable TV in India, which were my early days as well, two credit sequences set my imagination on fire. The first was Chariots Of Fire (1981), for the Vangelis theme, of course, but also Nigel Havers’ beatific smile registering among the serious runners on the beach',
        image:'/images/Jet-Li.webp'
    },
    {
        title:'john rambo',
        occupation:'Movies',
        bio:'You know what you are. What you-re made of. War is in your blood. Don-t fight it. You didn-t kill for your country. You killed for yourself. God-s never gonna make that go away. When you re pushed, killings as easy as breathing.',
        image:'/images/JOHN_RAMBOrs_740x.webp'
    },
    {
        title:'john doe',
        occupation:'philosophy',
        bio:'Entering the conclusion of our conversation, Doe grew philosophical and expansive, speaking to how the group—basically active since 1977—have withstood personal differences, even his and Cervenka’s 1985 divorce',
        image:'/images/john-doe.webp'
    }

]
var randomSide=Math.floor(Math.random()* img_array.length)
function chooseImageRandomly(){
//  console.log(img_array[randomSide]?.image)
//   console.log(img_array[randomSide]?.bio)
  // console.log(img_array[randomSide].occupation)

  // return console.log(randomSide,`image size: ${img_array.length}`)
 image_.src=img_array[randomSide].image
bio_.innerHTML=img_array[randomSide].bio
occupation_.innerHTML=img_array[randomSide].occupation
title_.innerHTML=img_array[randomSide].title

// console.log(img_array[randomSide].image)

}



rdm_btn.addEventListener('click',chooseImageRandomly)


next.addEventListener("click", () => {
  if (currentSlide === maxSlide-1) {currentSlide = 0;}
  else currentSlide++;
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index-currentSlide) * 100}%)`;
  });
});
document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentSlide === 0) {currentSlide = maxSlide-1;}
   else currentSlide--;
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
  });
});
