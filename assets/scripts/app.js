const toggleThemeBtns = document.querySelectorAll(".toggle-mode");
const submenuOpenBtn = document.querySelector('.submenu-open-btn');
const subMenu = document.querySelector('.submenu');
const mobileNavIcon = document.querySelector("#nav-icon");
const mobileNavCloseIcon = document.querySelector("#close-btn");
const mobileCartCloseIcon = document.querySelector("#close-btn2");
const moBoNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const mobileCartIcon = document.querySelector('.mobile-cart-icon');
const mobileCart = document.querySelector('.mobile-cart');

toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", function() {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
    })
})

submenuOpenBtn.addEventListener('click', function(e) {
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
    subMenu.classList.toggle("submenu--open");
})

mobileNavIcon.addEventListener("click", () => {
    moBoNav.classList.remove("-right-64");
    moBoNav.classList.add("right-0");

    overlay.classList.add("overlay--visible");
})

function navClose() {
    moBoNav.classList.add("-right-64");
    moBoNav.classList.remove("right-0");
    overlay.classList.remove("overlay--visible")
}
function cartClose() {
    mobileCart.classList.add('-left-64');
    mobileCart.classList.remove('left-0');
    overlay.classList.remove("overlay--visible");
}


mobileNavCloseIcon.addEventListener("click", navClose);
overlay.addEventListener("click", navClose);

mobileCartIcon.addEventListener("click", () => {
    mobileCart.classList.remove('-left-64');
    mobileCart.classList.add('left-0');
    overlay.classList.add("overlay--visible");
})

mobileCartCloseIcon.addEventListener("click", cartClose);
overlay.addEventListener("click", cartClose);