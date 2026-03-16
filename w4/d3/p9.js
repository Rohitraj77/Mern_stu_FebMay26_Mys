// const asyncFetchBtn = document.getElementById("asyncFetch");
// const output = document.getElementById("output");
// const postIdInput = document.getElementById("postInput")
// asyncFetchBtn.addEventListener("click", async function () {
//     // output.textContent = "Loading user...";

//     try {
//         const id = postIdInput.ariaValueMax.trim();
//         if(id===""){
//             output.textContent = "Post ID is required.";
//             return;
//         }
//         const numericId = Number(id);
//         if(numericId > 1 && numericId < 100){
//             output.textContent = "ID"+numericId
//         }
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/10");

//         if (!response.ok) {
//             throw new Error("HTTP error: " + response.status);
//         }

//         const data = await response.json();

//         output.textContent = JSON.stringify(data, null, 2);
//     }
//     catch (error) {
//         output.textContent = "Error: " + error.message;
//     }
// }); 















const asyncFetchBtn = document.getElementById("asyncFetch");
const output = document.getElementById("output");
const postIdInput = document.getElementById("postIdInput");

asyncFetchBtn.addEventListener("click", async function () {
    const id = postIdInput.value.trim();

    if (id === "") {
        output.textContent = "Post ID is required.";
        return;
    }

    const numericId = Number(id);

    if (numericId < 1 || numericId > 100) {
        output.textContent = "Enter valid id b/w 1 & 100";
        return;
    }

    try {
        output.textContent = "Fetching post ...";

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + numericId);

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const data = await response.json();

        output.textContent = JSON.stringify(data, null, 2);

    } catch (error) {
        output.textContent = "Error: " + error.message;
    }
});