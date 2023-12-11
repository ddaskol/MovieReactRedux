export const fetchMovies = async () => {
    const response = await fetch("/data/movies.json");
    const movies = await response.json();
    // console.log(movies)
    return movies
}