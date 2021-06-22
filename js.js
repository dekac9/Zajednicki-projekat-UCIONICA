//RESPONSIVE NAVBAR 
const body = document.querySelector("body");
const navBar = document.querySelector(".navbar-container");
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

//CONTACT FORM STYLING
const loginBtn = document.getElementsByClassName("login-header-btn")[0];
const signupBtn = document.getElementsByClassName("signup-header-btn")[0];
const prekrivac = document.getElementsByClassName("prekrivac")[0];
const leftArrow = document.getElementsByClassName("fa-arrow-alt-circle-left")[0];
const rightArrow = document.getElementsByClassName("fa-arrow-alt-circle-right")[0];

loginBtn.addEventListener("click", function() {
    prekrivac.style.marginLeft = "50%"
    leftArrow.style.display = "block";
    rightArrow.style.display = "none";
    signupBtn.style.color = "lightgray";
    loginBtn.style.color = "black";
})
signupBtn.addEventListener("click", function() {
    prekrivac.style.marginLeft = "0%";
    leftArrow.style.display = "none";
    rightArrow.style.display = "block";
    signupBtn.style.color = "black";
    loginBtn.style.color = "lightgray";
})

//CONTACT FORM REGEX
//Lisener za login btn
document.getElementById("login-btn").addEventListener("click", function() {
    //Input polja
    let name = document.getElementById("loginName");
    let email = document.getElementById("loginEmail");
    let pass = document.getElementById("loginPass");

    //Regexi
    let nameRegex = /^[A-Z][a-z]{2,}/;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    //Metoda test
    let nameTest = nameRegex.test(name.value);   
    let emailTest = emailRegex.test(email.value);
    let passTest = passRegex.test(pass.value);

    //Font awesome ikonice za tacan i netacan unos
    let nameTrue = document.getElementById("nameTrue");  
    let nameFalse = document.getElementById("nameFalse");
    let emailTrue = document.getElementById("emailTrue");
    let emailFalse = document.getElementById("emailFalse");
    let passTrue = document.getElementById("passTrue");
    let passFalse = document.getElementById("passFalse");

    //Testiramo sve unose da li se poklapaju sa regexima i dodeljujemo style
    if(nameTest) {
        nameTrue.style.display = "block";
        name.style.borderColor = "green";
        nameFalse.style.display = "none";
    }else {
        nameFalse.style.display = "block";
        name.style.borderColor = "red";
        nameTrue.style.display = "none";
    }

    if(emailTest) {
        emailTrue.style.display = "block";
        email.style.borderColor = "green";
        emailFalse.style.display = "none";
    }else {
        emailFalse.style.display = "block";
        email.style.borderColor = "red";
        emailTrue.style.display = "none";
    }

    if(passTest) {
        passTrue.style.display = "block";
        pass.style.borderColor = "green";
        passFalse.style.display = "none";
    }else {
        passFalse.style.display = "block";
        pass.style.borderColor = "red";
        passTrue.style.display = "none";
    }
})

//Lisener za signup btn
document.getElementById("signup-btn").addEventListener("click", function() {
    //Input polja
    let name = document.getElementById("signupName");
    let email = document.getElementById("signupEmail");
    let phone = document.getElementById("signupPhone"); 
    let pass = document.getElementById("signupPass");
    let passConfirm = document.getElementById("signupConfirmPass");

    //Regexi
    let nameRegex = /^[A-Z][a-z]{2,}/;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    let passConfirmRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    //Primena metode "test"
    let nameTest = nameRegex.test(name.value);
    let emailTest = emailRegex.test(email.value);
    let phoneTest = phoneRegex.test(phone.value);
    let passTest = passRegex.test(pass.value);
    let passConfirmTest = passConfirmRegex.test(passConfirm.value);

    //Font awesome ikone za tacno i netacno
    let nameTrue = document.getElementById("nameTrueSignup");  
    let nameFalse = document.getElementById("nameFalseSignup");
    let emailTrue = document.getElementById("emailTrueSignup");
    let emailFalse = document.getElementById("emailFalseSignup");
    let phoneTrue = document.getElementById("phoneTrueSignup");
    let phoneFalse = document.getElementById("phoneFalseSignup");
    let passTrue = document.getElementById("passTrueSignup");
    let passFalse = document.getElementById("passFalseSignup");
    let passConfirmTrue = document.getElementById("passConfirmTrueSignup");
    let passConfirmFalse = document.getElementById("passConfirmFalseSignup");

    //Testiranje regexa
    if(nameTest) {
        nameTrue.style.display = "block";
        name.style.borderColor = "green";
        nameFalse.style.display = "none";
    }else {
        nameFalse.style.display = "block";
        name.style.borderColor = "red";
        nameTrue.style.display = "none";
    }

    if(emailTest) {
        emailTrue.style.display = "block";
        email.style.borderColor = "green";
        emailFalse.style.display = "none";
    }else {
        emailFalse.style.display = "block";
        email.style.borderColor = "red";
        emailTrue.style.display = "none";
    }

    if(phoneTest) {
        phoneTrue.style.display = "block";
        phone.style.borderColor = "green";
        phoneFalse.style.display = "none";
    }else {
        phoneFalse.style.display = "block";
        phone.style.borderColor = "red";
        phoneTrue.style.display = "none";
    }

    if(passTest) {
        passTrue.style.display = "block";
        pass.style.borderColor = "green";
        passFalse.style.display = "none";
    }else {
        passFalse.style.display = "block";
        pass.style.borderColor = "red";
        passTrue.style.display = "none";
    }

    if(passConfirmTest) {
        passConfirmTrue.style.display = "block";
        passConfirm.style.borderColor = "green";
        passConfirmFalse.style.display = "none";
    }else {
        passConfirmFalse.style.display = "block";
        passConfirm.style.borderColor = "red";
        passConfirmTrue.style.display = "none";
    }
})