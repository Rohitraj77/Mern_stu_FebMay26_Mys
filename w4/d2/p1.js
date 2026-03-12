const message = document.getElementById("message"); 
const originalText = message.innerText;

document.getElementById("innerTextBtn").addEventListener("click", function () {
    message.innerText = "updated using innerText";
});

document.getElementById("textContentBtn").addEventListener("click", function () {
    message.textContent = "updated using textContent";
});

document.getElementById("innerHTMLBtn").addEventListener("click", function () {
    message.innerHTML = "<strong>Original</strong> message";
});

document.getElementById("ResetBtn").addEventListener("click", function () {
    message.innerText = originalText;
});


// how is textcontent different from innerhtml