const livePassword = document.getElementById("livePassword");
const message = document.getElementById("message");
livePassword.addEventListener("input",function(){
//Password validation
    const Password = livePassword.value;
    if (!Password) {
        message.textContent = "Password is required";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    //check the length of the password
    if (Password.length < 8) {
        message.textContent = "Password must be atleast 8 characters long.";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    //check password has uppercase 
    if (!/[A-Z]/.test(Password)) {
        message.textContent = "Password must have atleast 1 uppercase character.";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    if (!/[a-z]/.test(Password)) {
        message.textContent = "Password must have atleast 1 lowercase character.";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    //check number
    if (!/\d/.test(Password)) {
        message.textContent = "Password must have atleast 1 digit in it.";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    //check special characters
    if (!/[@#$%&*!]/.test(Password)) {
        message.textContent = "Password must have atleast 1 special character(@#$%&*!).";
        message.style.color = "red";
        livePassword.focus();
        return;
    }

    message.textContent = "valid email & password entered";
    message.style.color = "green";
    console.log("Success!",{email,Password});
});
