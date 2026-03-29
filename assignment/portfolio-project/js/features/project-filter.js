function renderProjectFilters(){

const filterContainer = document.getElementById("project-filters");

if(!filterContainer){
console.log("Filter container not found");
return;
}

const categories = ["All","MERN","React","JavaScript"];

categories.forEach(function(category){

const btn = document.createElement("button");

btn.textContent = category;

btn.className = "px-4 py-2 bg-gray-200 rounded";

btn.addEventListener("click",function(){

filterProjects(category);

});

filterContainer.appendChild(btn);

});

}

function filterProjects(category){

const projects = document.querySelectorAll(".project-card");

projects.forEach(function(project){

const title = project.querySelector(".project-title").textContent;

if(category === "All" || title.includes(category)){
project.style.display = "block";
}else{
project.style.display = "none";
}

});

}

renderProjectFilters();