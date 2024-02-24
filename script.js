const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", openMenu);

function openMenu(){
    menu.classList.toggle("active");
}

const link = document.querySelectorAll(".page");

link.forEach(link => link.addEventListener("click", closeMenu));

function closeMenu(){
    menu.classList.remove("active");
}