import axios from 'axios'
export const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',

    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTljMWQzZjQxYjc0YzkwZjViZDUyNGM4Y2U4NDc0MiIsInN1YiI6IjY1NjMzNTY1N2RmZGE2NTkzNTNiMDc3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KYvG1Mx-n1Avo0D3JGXPnKkTRWxgx67-t2Bxvwxra-I'
    }
});