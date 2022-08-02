const navbar = document.querySelector(".site-header__menu-btn");

var head = document.querySelector(".site-header");
var list = document.querySelector(".sitenav__list");
var span = document.querySelector(".sitenav__span");
navbar.addEventListener("click" , function(){
  list.classList.toggle("sitenav__list-on")
  span.style.dispay = "block"});