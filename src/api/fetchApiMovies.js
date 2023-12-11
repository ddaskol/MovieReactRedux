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
        const responce = await axiosInstance.get(`movie/${id}`, {
            params: {
                language: "en-US",
            }
        });
        // console.log(responce.data)
        return responce.data
    } catch (error) {
        console.error(error);
    }
}

// movie/{movie_id}
// `movie/${params.id}`

// export async function fetchRecomendationMovies() {
//     try {
//         const response = await axiosInstance.get('movie/popular', {
//             params: {
//                 language: "en-US",
//                 page: 3
//             }
//         });
//         console.log(response);
//         return response.data.results
//     } catch (error) {
//         console.error(error);
//     }
// }



