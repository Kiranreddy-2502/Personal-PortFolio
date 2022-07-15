/* ----- toggele style switvher=----- */
var typed = new Typed(".typing", {
    strings: ["Web Developer", "Web Designer", "Programmer"],
    typeSpeed: 90,
    BackSpeed: 60,
    loop: true
})
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    })
    //hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}
/*-----------------theme light and dark mode-------------------------*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
let color = document.getElementById("color1")
color.addEventListener("click", () => {

    let color1 = document.querySelector(".active")
    console.log(color1);
    color1.classList.remove("active")
    color.classList.add("active")
})
let color5 = document.getElementById("color5")
color5.addEventListener("click", () => {

    let color1 = document.querySelector(".active")
    color1.classList.remove("active")
    color5.classList.add("active")
})
let color2 = document.getElementById("color2")
color2.addEventListener("click", () => {

    let color1 = document.querySelector(".active")
    console.log(color1);
    color2.classList.add("active")
    color1.classList.remove("active")
})
let color3 = document.getElementById("color3")
color3.addEventListener("click", () => {

    let color1 = document.querySelector(".active")
    console.log(color1);
    color1.classList.remove("active")
    color3.classList.add("active")
})
let color4 = document.getElementById("color4")
color4.addEventListener("click", () => {

    let color1 = document.querySelector(".active")
    console.log(color1);
    color1.classList.remove("active")
    color4.classList.add("active")
})
