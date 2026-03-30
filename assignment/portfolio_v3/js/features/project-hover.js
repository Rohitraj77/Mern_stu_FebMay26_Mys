function setupProjectHover(){

const projects = document.querySelectorAll(".project-card");

projects.forEach(function(project){

project.addEventListener("mouseenter",function(){
project.classList.add("ring-4","ring-green-400");
});

project.addEventListener("mouseleave",function(){
project.classList.remove("ring-4","ring-green-400");
});

});

}

window.addEventListener("load",setupProjectHover);