const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", e => {
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (firstName === "") {
        errFunc(fname, "First Name cannot be empty")
    }
    else {
        successFunc(fname, "First Name")
    }
    if (lastName === "") {
        errFunc(lname, "Last Name cannot be empty")
    }
    else {
        successFunc(lname, "Last Name")
    }
    if (emailValue === "") {
        errFunc(email, "email cannot be empty")
    }
    else if (!emailValue.match(pattern)) {
        errFunc(email, "Looks like this is not an email")
        email.style.color = "hsl(0, 100%, 74%)";
    }
    else {
        successFunc(email, "email")
    }
    if (passwordValue === "") {
        errFunc(password, "Password cannot be empty")
    }
    else {
        successFunc(password, "password")
    }
})

function errFunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector("span");
    span.innerText = message;
    req.className = "error";
    span.className = "error-text";
}

function successFunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector("span");
    span.innerText = message;
    req.className = "success";
    span.className = "success-text";
}

