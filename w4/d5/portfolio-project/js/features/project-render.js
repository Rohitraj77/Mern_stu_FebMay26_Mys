// function renderProjects(){

//     const projectsContainer = document.getElementById("projects-container");

//     if(!projectsContainer){
//         console.log("projects container not found");
//         return;
//     }

//     projectsContainer.innerHTML = "";

//     projectsData.forEach(function(project){

//         const card = document.createElement("div");
//         card.className = "p-6 bg-white rounded-2xl shadow-lg";

//         const title = document.createElement("h3");
//         title.className = "text-xl font-bold mb-2";
//         title.textContent = project.title;

//         const description = document.createElement("p");
//         description.className = "text-sm mb-4";
//         description.textContent = project.description;

//         const link = document.createElement("a");
//         link.href = project.link;
//         link.textContent = "View Project";
//         link.className = "text-blue-600 font-bold";

//         card.appendChild(title);
//         card.appendChild(description);
//         card.appendChild(link);

//         projectsContainer.appendChild(card);
//     });

//     console.log("Projects rendered successfully");
// }












function renderProjects(){

    const projectsContainer = document.getElementById("projects-container");

    if(!projectsContainer){
        console.log("projects container not found");
        return;
    }

    projectsContainer.innerHTML = "";

    projectsData.forEach(function(project){

        const card = document.createElement("div");
        card.className = "p-6 bg-white rounded-2xl shadow-lg";

        const title = document.createElement("h3");
        title.className = "text-xl font-bold mb-2";
        title.textContent = project.title;

        const description = document.createElement("p");
        description.className = "text-sm mb-4";
        description.textContent = project.description;

        const link = document.createElement("a");
        link.href = project.link;
        link.textContent = "View Project";
        link.className = "text-blue-600 font-bold";

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);

        projectsContainer.appendChild(card);
    });

    console.log("Projects rendered successfully");
}

renderProjects();   