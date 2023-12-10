import { axiosInstance } from "../config/axios";

export async function fetchPopularMovies() {
    try {
        const response = await axiosInstance.get('movie/popular', {
            params: {
                language: "en-US",
                page: 2
            }
        });
        console.log(response.data.results);
        return response.data.results
    } catch (error) {
        console.error(error);
    }
}


