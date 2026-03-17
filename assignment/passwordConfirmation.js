

const btn = document.getElementById("submitBtn");
const message = document.getElementById("message");

btn.addEventListener("click", function () {

const Password = document.getElementById("confirmPassword").value;
const confirmPassword = document.getElementById("anotherconfirmPassword").value;

if (Password === confirmPassword) {
    message.textContent = "Password is matching";
    message.style.color = "green";
    return;
}
else {
    message.textContent = "Password is not matching";
    message.style.color = "red";
    return;
}

});



