//RESPONSIVE NAVBAR 
const body = document.querySelector("body");
const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.addEventListener("click", function() {
    navBar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
})

cancelBtn.addEventListener("click", function() {
    body.classList.remove("disabled");
    navBar.classList.remove("show");
    menuBtn.classList.remove("hide");
})

//SCROLL FUNCTION
window.addEventListener("scroll", function() {
    if(this.scrollY > 20) {
        navBar.classList.add("sticky");
    }else {
        navBar.classList.remove("sticky");
    }
})


//CONTACT FORM 
const loginBtn = document.getElementsByClassName("login-header-btn")[0];
const signupBtn = document.getElementsByClassName("signup-header-btn")[0];
const prekrivac = document.getElementsByClassName("prekrivac")[0];

loginBtn.addEventListener("click", function() {
    prekrivac.style.marginLeft = "50%"
    signupBtn.style.backgroundColor = "white";
    signupBtn.style.color = "black";
    loginBtn.style.backgroundColor = "blueviolet";
})
signupBtn.addEventListener("click", function() {
    prekrivac.style.marginLeft = "0%";
    loginBtn.style.backgroundColor = "white";
    loginBtn.style.color = "black";
    signupBtn.style.backgroundColor = "blueviolet";
})