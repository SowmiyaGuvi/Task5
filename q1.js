//Create a class movie

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Example usage of the getPG method
let movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG-13"),
    new Movie("Movie4", "Studio4", "PG")
];

let pgMovies = Movie.getPG(movies);
// Display the titles of PG-rated movies
pgMovies.forEach(movie => console.log(movie.title));


// Creating an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
