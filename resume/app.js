let headerr=document.getElementById('headd')
let jumpToTop=document.querySelector('.topBtn')
window.addEventListener('scroll',scrolll)
function scrolll(){
  let info=document.documentElement.scrollTop;
  if(info<5){
    headerr.classList.replace('header-top','vv')
  }
  if(info===0){
    headerr.classList.replace('vv','header-top')
  }
}
jumpToTop.addEventListener('click',function(){
window.scrollTo(0,0)
})
let dataName=document.getElementById('data')

dataName.addEventListener('click',function(event){
  console.log(event.target.dataset.name);
})


let $=document
let text=$.querySelector('main-content__link')
let btn=$.querySelector('.topBtn')
function moveee(){
    text.style.animation='movee 4s 5'
}
btn.addEventListener('click',moveee)