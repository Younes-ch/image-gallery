import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    total: number;
    totalHits: number;
    hits: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://pixabay.com/api/",
    params: {
        key: "41829112-e11acdfd7af889572293d991d"
    },
})

class APIClient<T> {
    // constructor(public endpoint: string) { }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>("", config)
            .then(res => res.data);
    }
}

export default APIClient;