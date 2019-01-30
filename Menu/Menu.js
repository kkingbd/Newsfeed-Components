
// Toggle the "menu--open" class on your menu refence. 
let toggleMenu = () =>{
menu.classList.toggle('.menu--open');
if (menu.classList.contains("menu--open")) {
  TweenMax.to(menu, 1, {left: 0})
} else {
  TweenMax.to(menu, 1, {left: -350})
}
}
// Start Here: Create a reference to the ".menu" class
let menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
let menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);
// Using your menuButton reference, add a click handler that calls toggleMenu
