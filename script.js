
const nav = document.querySelector(".row")
const hamburger = document.querySelector(".ham")

function toggle() {
    if(nav.style.display === "none"){
    nav.style.display = "block";
    }else {
        nav.style.display = "none";
    }
}