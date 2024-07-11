let $=document
let headerr=$.getElementById('head')
let jumpToTop=$.querySelector('.topBtn')
window.addEventListener('scroll',scrolll)
function scrolll(){
  let info=$.documentElement.scrollTop;
  if(info<5){
    headerr.classList.replace('header-top','Responsive-Header')
  }
  if(info===0){
    headerr.classList.replace('Responsive-Header','header-top')
  }
}
jumpToTop.addEventListener('click',function(){
window.scrollTo(0,0)
})
let DataName=$.getElementById('data')

DataName.addEventListener('click',function(event){
  console.log(event.target.dataset.name);
})



let text=$.querySelector('main-content__link')
let btn=$.querySelector('.topBtn')
function moveee(){
    text.style.animation='movee 4s 5'
}
btn.addEventListener('click',moveee)



let menu=$.querySelector(".menu-nav")
let HeaderBtn=$.querySelector(".header-btn")
let HeaderBtnIcon=$.querySelector(".header-btn i")
HeaderBtn.addEventListener('click',function(){
  if(HeaderBtnIcon.classList.contains('fa-bars')){
      menu.style.right='0'
      HeaderBtnIcon.classList='fa fa-times'
    }
    else{
      menu.style.right='-2000px'
      HeaderBtnIcon.classList='fa fa-bars'
    }
})