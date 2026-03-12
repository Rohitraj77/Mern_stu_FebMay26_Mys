const jsonOutput = document.getElementById("jsonOutput");
document.getElementById("saveBtn").addEventListener("click", function () {
    const user = {
        id: 1,
        name: "Rohit",
        role: "Web Developer",
        skills: ["HTML", "CSS", "JavaScript"]
    };
localStorage.setItem("userProfile",JSON.stringify(user));
jsonOutput.textContent = "User object saved as string to localStorage";
});

document.getElementById("readBtn").addEventListener("click", function () {
    try{
    const up = localStorage.getItem("userProfile"); 
    console.log(JSON.parse(up));
    console.log(up);
    jsonOutput.textContent = "user " + up;
    }
    catch(error){
        jsonOutput.textContent = "JSON parsing failed";
    }
});