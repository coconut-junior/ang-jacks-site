var menuOpen = false;
var nav = document.body.querySelector('.mobile-nav');
var bar = document.querySelectorAll('.bar');

function openMenu() {
    if (menuOpen) {
        menuOpen = false;
        nav.style.height = "0";
        nav.style.paddingTop = "0";
        nav.style.paddingBottom = "0";
        
        for (i = 0; i < bar.length; i++) {
            bar[i].style.marginTop = "2px";
            bar[i].style.marginBottom = "2px";
        }
    }
    else {
        menuOpen = true;
        nav.style.height = "auto";
        nav.style.paddingTop = "20%";
        nav.style.paddingBottom = "24px";
        for (i = 0; i < bar.length; i++) {
            bar[i].style.marginTop = "3px";
            bar[i].style.marginBottom = "3px";
        }
    }
}