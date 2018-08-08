//Javascript

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


document.querySelector('#subBtn').addEventListener('click', function() {
    var email = document.querySelector("#em").value;
    var sub = document.querySelector("#subs");
    if (email === "") {
        sub.textContent = "Please Input an email";
        sub.style = "color: darkred";
    } else if (!validateEmail(email)) {
        sub.textContent = "Please input the correct Email format!";
        sub.style = "color:red";
    } else {
        var name = email.split('@');
        name[0] = name[0].toUpperCase();
        sub.textContent = name[0] + ", Thank you for Subscribing!";
        sub.style = "color: yellow";
    }
});



document.querySelector("#em").addEventListener('click', function() {

    reset();
});


function reset() {
    var sub = document.querySelector("#subs");
    sub.textContent = "Subscribe Now";
    sub.style = "color: white";
    var email = document.querySelector("#em");
    email.value = "";
}