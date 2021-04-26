let movies = [
    {
    id:0,
    name: "The Shawshank Redemption",
    score: 10,
    },
    {
    id:1,
    name: "Forrest Gump",
    score: 30,
    },
    {
    id:2,
    name: "Schindler's List",
    score: 40,
    },
    {
    id:3,
    name: "The Godfather",
    score: 20,
    }
]

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovie = movies.filter(movie => movie.id === id)
    return filteredMovie[0]
} 

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id)
    if( movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else {
        return false
    }
}

export const addMovie = (name,score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}