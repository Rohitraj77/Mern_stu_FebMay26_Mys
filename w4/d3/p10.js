// const asyncFetchBtn = document.getElementById("asyncFetch");
// const output = document.getElementById("output");

// asyncFetchBtn.addEventListener("click", async function () {
//     try{
//         const response = await
//         fetch("https://jsonplaceholder.typicode.com/users");
//         if(!response.ok) throw new
//         Error("HTTP error: "+response.status);//if it is valid 200 series or 400
//         output.textContent = JSON.stringify(users,(null,2));
//         console.log(users);
//     }
//     catch(error){
//         output.textContent = "Error: "+error.message;
//     }
// });

const asyncFetchBtn = document.getElementById("asyncFetch");
const output = document.getElementById("output");

asyncFetchBtn.addEventListener("click", async function () {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const users = await response.json();

        const firstThree = users.slice(0, 3); //It gets first 3 users

        output.textContent = JSON.stringify(firstThree, null, 2);

    } catch (error) {
        output.textContent = "Error: " + error.message;
    }
});