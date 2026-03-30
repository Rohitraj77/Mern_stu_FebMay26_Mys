// function renderProjects(){

//     const projectsContainer = document.getElementById("projects-container");

//     if(!projectsContainer){
//         console.log("projects container not found");
//         return;
//     }

//     if(!projectsData || projectsData.length === 0){
//         console.log("No project data available");
//         return;
//     }

//     projectsContainer.innerHTML = "";

//     projectsData.forEach(function(project){

//         const card = document.createElement("div");
//         card.className = "project-card p-6 bg-white rounded-2xl shadow-lg";

//         const title = document.createElement("h3");
//         title.className = "project-title text-xl font-bold mb-2";
//         title.textContent = project.title;

//         const description = document.createElement("p");
//         description.className = "text-sm mb-4";
//         description.textContent = project.description;

//         const link = document.createElement("a");
//         link.href = project.link;
//         link.textContent = "View Project";
//         link.className = "text-blue-600 font-bold";
//         link.target = "_blank";

//         card.appendChild(title);
//         card.appendChild(description);
//         card.appendChild(link);

//         projectsContainer.appendChild(card);
//     });

//     console.log("Projects rendered successfully");
// }

// renderProjects();




function renderProjects(data = projectsData){

    const projectsContainer = document.getElementById("projects-container");

    if(!projectsContainer){
        console.log("projects container not found");
        return;
    }

    if(!data || data.length === 0){
        projectsContainer.innerHTML = "<p class='text-center'>No projects found</p>";
        return;
    }

    projectsContainer.innerHTML = "";

    data.forEach(function(project){

        let expanded = false;

        const card = document.createElement("div");
        card.className = "project-card p-6 bg-white rounded-2xl shadow-lg";

        const projectTitle = project.title || project.name;
        const projectLink = project.link || project.liveDemo;

        const title = document.createElement("h3");
        title.className = "text-xl font-bold mb-2 text-black";
        title.textContent = projectTitle;

        const description = document.createElement("p");
        description.className = "text-sm mb-2";

        const shortText = project.description.slice(0, 80) + "...";
        description.textContent = shortText;

        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "View More";
        toggleBtn.className = "text-blue-600 font-bold mb-3";

        toggleBtn.addEventListener("click", function(){
            expanded = !expanded;

            description.textContent = expanded ? project.description : shortText;
            toggleBtn.textContent = expanded ? "View Less" : "View More";
        });

        const link = document.createElement("a");
        link.href = projectLink;
        link.textContent = "View Project";
        link.className = "text-blue-600 font-bold";
        link.target = "_blank";

        card.append(title, description, toggleBtn, link);
        projectsContainer.appendChild(card);
    });
}