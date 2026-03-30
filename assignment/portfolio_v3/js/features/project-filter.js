// function renderProjectFilters(){

// const filterContainer = document.getElementById("project-filters");
// const countDisplay = document.getElementById("project-count");
// if(!filterContainer){
// console.log("Filter container not found");
// return;
// }

// const categories = ["All","MERN","React","JavaScript"];

// categories.forEach(function(category){

// const btn = document.createElement("button");

// btn.textContent = category;

// btn.className = "px-4 py-2 bg-gray-200 rounded";

// btn.addEventListener("click",function(){

// filterProjects(category);

// });

// filterContainer.appendChild(btn);

// });

// }

// function filterProjects(category){

// const projects = document.querySelectorAll(".project-card");

// projects.forEach(function(project){

// const title = project.querySelector(".project-title").textContent;

// if(category === "All" || title.includes(category)){
// project.style.display = "block";
// }else{
// project.style.display = "none";
// }

// });

// }

// renderProjectFilters();








// function renderProjectFilters(){

//     const filterContainer = document.getElementById("project-filters");
//     const countDisplay = document.getElementById("project-count");

//     if(!filterContainer){
//         console.log("Filter container not found");
//         return;
//     }

//     const categories = ["All","MERN","React","JavaScript"];

//     categories.forEach(function(category){

//         const btn = document.createElement("button");

//         btn.textContent = category;

//         btn.className = "px-4 py-2 bg-gray-200 rounded";

//         btn.addEventListener("click",function(){

//             filterProjects(category);

//         });

//         filterContainer.appendChild(btn);

//     });

// }


// function filterProjects(category){

//     const projects = document.querySelectorAll(".project-card");
//     const countDisplay = document.getElementById("project-count");

//     let visibleCount = 0;

//     projects.forEach(function(project){

//         const title = project.querySelector(".project-title").textContent;

//         if(category === "All" || title.includes(category)){
//             project.style.display = "block";
//             visibleCount++;   
//         } else {
//             project.style.display = "none";
//         }

//     });

    
//     countDisplay.textContent = `${visibleCount} projects found`;

// }



// renderProjectFilters();








// function filterProjects(category){

//     if(category === "All"){
//         currentProjects = [...projectsData];
//     } else {
//         currentProjects = projectsData.filter(project =>
//             (project.name || project.title)
//                 .toLowerCase()
//                 .includes(category.toLowerCase())
//         );
//     }

//     renderProjects(currentProjects);

//     // update count
//     const countDisplay = document.getElementById("project-count");
//     countDisplay.textContent = `${currentProjects.length} projects found`;
// }






// global state
let currentProjects = [...projectsData];

// render filter buttons
function renderProjectFilters(){

    const container = document.getElementById("project-filters");

    const categories = ["All", "MERN", "Frontend", "JavaScript"];

    container.innerHTML = "";

    categories.forEach(cat => {

        const btn = document.createElement("button");
        btn.textContent = cat;
        btn.className = "px-4 py-2 bg-gray-200 rounded";

        btn.addEventListener("click", function(){

            const category = cat.toLowerCase();

            if(category === "all"){
                currentProjects = [...projectsData];
            } 
            else {
                currentProjects = projectsData.filter(p =>
                    p.category.toLowerCase() === category
                );
            }

            renderProjects(currentProjects);

            // update count
            const count = document.getElementById("project-count");
            count.textContent = `${currentProjects.length} projects found`;
        });

        container.appendChild(btn);
    });
}

// call it
renderProjectFilters();