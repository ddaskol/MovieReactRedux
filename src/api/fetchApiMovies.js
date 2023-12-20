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





