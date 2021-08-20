import axiosClient from "./axiosClient";

const qs = require("query-string");

export const songApi = {
    upload: (body) => {
        const url = "/songs";
        return axiosClient.post(url, body);
    },
    search: (searchOptions) => {
        const query = qs.stringify(searchOptions);
        let url = "/songs";
        if (query) {
            url += "?" + query;
        }
        
        return axiosClient.get(url);
    }
}