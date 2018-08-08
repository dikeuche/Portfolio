//Login Javascript
function validateEmail(mail) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
}
document.getElementById("mail").addEventListener("keydown", function() {
    if (!validateEmail(mail.value)) {
        document.getElementById("emsg").style.display = "block";
        document.getElementById("emsg").innerHTML = "Wrong email format!";
        document.getElementById("emsg").style.color = "orange";
        document.getElementById("mail").style.backgroundColor = "rgb(235, 182, 139)";
        document.getElementById("mail").style.border = "none";

    } else {
        document.getElementById("emsg").style.display = "none";
        document.getElementById("mail").style.backgroundColor = "rgb(42, 109, 126)";
    }
});

document.getElementById("signin").addEventListener("click", function() {
    if (pass.value === "" || mail.value === "") {
        document.getElementById("emsg").innerHTML = "Please fill all details";

    } else {
        document.getElementById("emsg").style.display = "block";
        document.getElementById("emsg").style.color = "orange";
        document.getElementById("emsg").innerHTML = "Registration Succesful";
    }
});