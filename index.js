var menuOpen = false;
var nav = document.body.querySelector('.mobile-nav');
var bar = document.querySelectorAll('.bar');
var navbar = document.querySelector('.navbar');
var homeButton = document.querySelector('.home-button');

function openMenu() {
    if (menuOpen) {
        menuOpen = false;
        nav.style.height = "0";
        nav.style.paddingTop = "0";
        nav.style.paddingBottom = "0";
        navbar.style.backgroundColor = "transparent";
        homeButton.style.backgroundImage = "url('images/home-button.png')";
        
        for (i = 0; i < bar.length; i++) {
            bar[i].style.marginTop = "2px";
            bar[i].style.marginBottom = "2px";
        }
    }
    else {
        menuOpen = true;
        nav.style.height = "auto";
        nav.style.paddingTop = "25%";
        nav.style.paddingBottom = "10%";
        navbar.style.backgroundColor = "#0A0B0C";
        homeButton.style.backgroundImage = "url('images/home-button-hover.png')";

        for (i = 0; i < bar.length; i++) {
            bar[i].style.marginTop = "3px";
            bar[i].style.marginBottom = "3px";
        }
    }
}