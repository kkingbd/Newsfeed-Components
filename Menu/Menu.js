
// Toggle the "menu--open" class on your menu refence. 
let toggleMenu = () =>{
menu.classList.toggle('.menu--open');
}
// Start Here: Create a reference to the ".menu" class
const menu;
let menu = document.querySelector('.menu-button');
// create a reference to the ".menu-button" class
const menuButton;
menuButton.addEventListener('click', toggleMenu);
// Using your menuButton reference, add a click handler that calls toggleMenu
