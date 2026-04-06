// callback based validation functions 

function validateMovieSelection(movies, movieId, callback) {
    const selectedMovie = movies.find(movie => movie.id === movieId);
    if(!selectedMovie) {
        return callback("Invalid movie selection. choose a valid movie id.",null);
    }
    callback(null, selectedMovie);
}

function validateTimeSelection(movies, selectedTime, callback) {
    const selectedShowTime = movies.showtimes.find((show)=>show.time.toLowerCase() === selectedTime.toLowerCase());
    if(!selectedShowTime) {
        return callback("Invalid show time selection. choose a valid show time.",null);
    }
    callback(null, selectedShowTime);
}

function validateSeatCount(seatCount, callback) {
    if(isNaN(seatCount) || seatCount <= 0) {
        return callback("Invalid seat count. choose a valid seat count.",null);
    }
    callback(null,  seatCount );
}

module.exports = {
    validateMovieSelection,
    validateTimeSelection,
    validateSeatCount
};