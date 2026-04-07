// // This file stores the movie data used in the CLI application
// const movies = [
//     {
//         id: 1,
//         title: "Toxic",
//         showtimes: [{time: "10:00 AM",  seatsavailable: 100 },
//                     {time: "1:00 PM", seatsavailable: 70 },
//                     {time: "4:00 PM", seatsavailable: 300 }
//         ]
//     },

//     {
//         id: 2,
//         title: "Dhurandhar",
//         showtimes: [{time: "10:00 AM",  seatsavailable: 100 },
//                     {time: "1:00 PM", seatsavailable: 70 },
//                     {time: "4:00 PM", seatsavailable: 300 }
//         ]
//     },

//     {
//         id: 3,
//         title: "LoveMocktail3",
//         showtimes: [{time: "11:00 AM",  seatsavailable: 100 },
//                     {time: "2:00 PM", seatsavailable: 70 },
//                     {time: "7:00 PM", seatsavailable: 300 }
//         ]
//     }
// ];

// // Export the movie data so that other files can use it.
// module.exports = movies;









// movies.js
// This file stores the movie data used in the CLI App

const movies = [
    {
        id:1,
        title:"Dhurandar2",
        showtimes:[
            {time: "10:00 AM",seatsAvailable: 10},
            {time: "1:00 PM",seatsAvailable: 7},
            {time: "6:00 PM",seatsAvailable: 30}
        ]
    },
    {
        id:2,
        title:"LoveMocktail3",
        showtimes:[
            {time: "10:00 AM",seatsAvailable: 10},
            {time: "1:00 PM",seatsAvailable: 7},
            {time: "6:00 PM",seatsAvailable: 30}
        ]
    },
    {
        id:3,
        title:"Hayagreeva",
        showtimes:[
            {time: "11:00 AM",seatsAvailable: 10},
            {time: "2:00 PM",seatsAvailable: 7},
            {time: "7:00 PM",seatsAvailable: 30}
        ]
    }
];
//Export the movie data so that other files can use it. 
module.exports = movies;