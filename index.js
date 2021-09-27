let daylight = document.querySelector('.darkBright');
let menuToggle = document.querySelector('.menuToggle');
let body = document.querySelector('body');
let nav = document.querySelector('.navi');


daylight.onclick = function(){
  body.classList.toggle('dark');
  daylight.classList.toggle('active');
}
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}
