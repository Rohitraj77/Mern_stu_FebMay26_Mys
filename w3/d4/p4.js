//filter method
let marks = [75,49,56,70,82,51,68];
let passed = marks.filter(mark => mark >=70);
console.log(marks);
console.log(passed);

let array = [{name:"raj",marks:90},
             {name:"dini",marks:94},
             {name:"vishnuvardhan",marks:45},
             {name:"rangitharanga",marks:70},
             {name:"chauvinchitara",marks:64}
];

let result = array.filter(stud => stud.marks >=70).map(stud => stud.name)
console.log("students scored more than 70",result);