
// email.onkeydown=function{

// }

let fnameoutput = document.getElementById("fn");
let lnameoutput = document.getElementById("ln");
let emailoutput = document.getElementById("em");
let nm = document.getElementById('nm');


let name = document.getElementById("ufname");
name.addEventListener('keyup', nmval)
let lname = document.getElementById("ulname");
lname.addEventListener('keyup', lnmval)
let email = document.getElementById("uemail");
email.addEventListener('keyup', emval)
let pwd = document.getElementById("upwd");
pwd.addEventListener('keyup', validate)
let cpwd = document.getElementById("ucpwd");
cpwd.addEventListener('keyup', validate)
let num = document.getElementById('num');
num.addEventListener('keyup', numval)


let but = document.getElementById('submit');

// function to validate passwords
function validate() {

    if (pwd.value == cpwd.value) {

        document.getElementById('cpwdoutput').innerHTML = "Passwords Matched";
        cpwdoutput.className = "valid";
        but.disabled = false;

    }
    else {
        document.getElementById('cpwdoutput').innerHTML = "Passwords Not Matched";
        cpwdoutput.className = "invalid";
        but.disabled = true;

    }
}

// function to validate first name
function nmval() {

    if (name.value == "") {
        fnameoutput.innerHTML = "Enter Name";
        fnameoutput.style.color = 'red';
        


    }
    if (isNaN(name.value)) {
        fnameoutput.innerHTML = "Valid";
        fnameoutput.style.color = 'lime';



    }
    else {
        fnameoutput.innerHTML = "Enter Alphabets";
        fnameoutput.style.color = 'Red';
        

    }

}

// function to validate last name
function lnmval() {

    if (lname.value == "") {
        lnameoutput.innerHTML = "Enter Last Name";
        lnameoutput.style.color = 'red';


    }
    if (isNaN(lname.value)) {
        lnameoutput.innerHTML = "Valid";
        lnameoutput.style.color = 'lime';

    }
    else {
        lnameoutput.innerHTML = "Enter Alphabets";
        lnameoutput.style.color = 'Red';

    }

}

// function to validate email
function emval() {

    if (email.value == "") {
        emailoutput.innerHTML = "Enter Email";
        emailoutput.style.color = 'red';


    }

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(email.value)) {
        emailoutput.innerHTML = "valid";
        emailoutput.style.color = 'lime';

    }
    else {
        emailoutput.innerHTML = "invalid";
        emailoutput.style.color = 'red';

    }
}

// function to valuate number
function numval() {
    if (num.value == "") {
        nm.innerHTML = "Enter Number";
        nm.style.color = 'red';

    }

    const ex = /^\d{10}$/;
    if (ex.test(num.value)) {
        nm.innerHTML = "Valid";
        nm.style.color = 'lime';

    }
    else {
        nm.innerHTML = "Enter 10 digit number";
        nm.style.color = 'red';

    }
}

