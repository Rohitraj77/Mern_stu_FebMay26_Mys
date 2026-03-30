// const sortSelect = document.getElementById("project-sort");

// sortSelect.addEventListener("change", function () {

//     let sortedProjects = [...projects]; // clone original data

//     const value = this.value;

//     if (value === "az") {
//         sortedProjects.sort((a, b) =>
//             a.title.localeCompare(b.title)
//         );
//     }

//     else if (value === "za") {
//         sortedProjects.sort((a, b) =>
//             b.title.localeCompare(a.title)
//         );
//     }

//     else if (value === "status") {
//         sortedProjects.sort((a, b) =>
//             a.status.localeCompare(b.status)
//         );
//     }

//     // Re-render projects
//     renderProjects(sortedProjects);
// });

const sortSelect = document.getElementById("project-sort");

sortSelect.addEventListener("change", function(){

    let sorted = [...currentProjects];

    if(this.value === "az"){
        sorted.sort((a,b)=>
            (a.name || a.title).localeCompare(b.name || b.title)
        );
    }

    else if(this.value === "za"){
        sorted.sort((a,b)=>
            (b.name || b.title).localeCompare(a.name || a.title)
        );
    }

    else if(this.value === "status"){
        sorted.sort((a,b)=>
            a.status.localeCompare(b.status)
        );
    }

    currentProjects = sorted;
    renderProjects(currentProjects);
});