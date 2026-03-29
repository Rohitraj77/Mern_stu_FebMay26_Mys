const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const typeInput = document.getElementById("type");
const feedbackInput = document.getElementById("feedback");

const submitBtn = document.getElementById("submitBtn");
const container = document.getElementById("feedbackContainer");

const msg = document.getElementById("msg");
const countDisplay = document.getElementById("count");

let count = 0;

submitBtn.addEventListener("click", function(){

const name = nameInput.value.trim();
const email = emailInput.value.trim();
const type = typeInput.value;
const feedback = feedbackInput.value.trim();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name === "" || email === "" || type === "" || feedback === ""){
msg.textContent = "All fields are required";
return;
}

if(!emailPattern.test(email)){
msg.textContent = "Enter valid email";
return;
}

if(feedback.length < 20){
msg.textContent = "Feedback must be at least 20 characters";
return;
}

msg.textContent = "";

});