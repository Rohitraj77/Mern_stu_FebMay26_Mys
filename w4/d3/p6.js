
const introBtn = document.getElementById("introBtn");
const output = document.getElementById("output");

introBtn.addEventListener("click", function () {
    output.textContent = "Sending request...";

    fetch("https://jsonplaceholder.typicode.com/posts/10")
        .then(function (response) {  // response is a user-defined parameter you can give any name
            return response.text();   
        })
        .then(function (text) {// text is a user-defined parameter you can give any name
            console.log("Text response:", text);
            output.textContent = text;
        })
        .catch(function (error) {
            output.textContent = "Unexpected fetch error: " + error.message;
        });
});