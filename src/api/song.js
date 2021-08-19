import axiosClient from "./axiosClient";

export const songApi = {
    upload: (body) => {
        const url = "/songs";
        return axiosClient.post(url, body);
    }
}