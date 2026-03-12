const themeInput = document.getElementById("themeInput");
const output = document.getElementById("output");
document.getElementById("saveBtn").addEventListener("click",function(){
    localStorage.setItem("theme",themeInput.value);
    localStorage.setItem("userName","Rohit");
    localStorage.setItem("loggedIn","true");
    console.log("Saved theme: ",themeInput.value);
    output.textContent = "Data successfully saved to loacal storage";
    output.style.color = "green";
    
});
document.getElementById("readBtn").addEventListener("click",function(){
    const theme = localStorage.getItem("theme");
    console.log("Saved theme: ",themeInput.value);
    output.textContent = "theme is: "+theme;
    output.style.color = "green";
    
});

document.getElementById("removeBtn").addEventListener("click",function(){
    const theme = localStorage.removeItem("loggedIn"); 
    output.textContent = "Removed 'loggedIn' ";
    output.style.color = "green";
    
});

document.getElementById("clearBtn").addEventListener("click", function () {
    localStorage.clear();
    output.textContent = "All local storage data cleared";
    output.style.color = "red";
});