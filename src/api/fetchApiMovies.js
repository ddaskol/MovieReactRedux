import { all } from "axios";
import { axiosInstance } from "../config/axios";

export async function fetchPopularMovies() {
    try {
        const response = await axiosInstance.get('movie/popular', {
            params: {
                language: "en-US",
                page: 1
            }
        });
        // console.log(response.data.results);
        return response.data.results
    } catch (error) {
        console.error(error);
    }
}

export async function fetchMovie(id) {
    try {
        const response = await axiosInstance.get(`movie/${id}`, {
            params: {
                language: "en-US",
            }
        });
        // console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export async function fetchMovies(ids) {
    try {
        const requests = ids.map(id => fetchMovie(id))
        const response = await all(requests)
        console.log(response)
        return response
    } catch (error) {
        console.error(error);
    }
}

// movie/{movie_id}
// `movie/${params.id}`
//movie/{movie_id}/recommendations

export async function fetchRecommendationMovies(id) {
    try {
        const response = await axiosInstance.get(`movie/${id}/recommendations`, {
            params: {
                language: "en-US",
                page: 1
            }
        });
        console.log(response);
        return response.data.results
    } catch (error) {
        console.error(error);
    }
}

export async function searchMovies(query) {
    try {
        const response = await axiosInstance.get(`search/movie`, {
            params: {
                query,
                include_adult: false,
                language: "en-US",
                page: 1
            }
        });
        console.log(response)
        return response.data.results
    } catch (error) {
        console.error(error);
    }
}


export async function filtersMovie(params) {
    try {
        console.log(params)
        const response = await axiosInstance.get(`discover/movie`, {
            params: {
                include_adult: false,
                include_video: false,
                language: "en-US",
                page: 1,
                with_genres: params.genre,
                year: params.year,
                with_origin_country: params.country
            }
        });
        return response.data.results
    } catch (error) {
        console.error(error);
    }
}

export async function getCountries(params) {
    try {
        const response = await axiosInstance.get(`configuration/countries`);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export async function getGenres(params) {
    try {
        const response = await axiosInstance.get(`genre/movie/list`);
        return response.data.genres
    } catch (error) {
        console.error(error);
    }
}