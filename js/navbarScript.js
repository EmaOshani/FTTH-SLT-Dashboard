
function profileToggle() {
    const toggleprofile = document.querySelector('.nav_menu');
    toggleprofile.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const toggleprofile = document.querySelector('.nav_menu');
    const user = document.querySelector('.nav_user');
    const isClickInsideMenu = toggleprofile.contains(event.target);
    const isClickOnUser = user.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnUser) {
        toggleprofile.classList.remove('active');
    }
});


let navigation = document.querySelector('.nav_navigation');
let menuToggle = document.querySelector('.nav_menuToggle');
let header = document.querySelector('header');

menuToggle.onclick = function(){
    header.classList.toggle('open');
}

var content = document.getElementsByTagName('body')[0];
var navColor = document.getElementsByTagName('header')[0]; //delete
var logo = document.getElementById('logo');
var logo_mini = document.getElementById('logo_mini');
var menu_toggle = document.querySelector('.nav_menuToggle');
var navigation_dark = document.querySelector('.nav_navigation');
var group = document.querySelector('.nav_group');