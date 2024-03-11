import axios from "axios";

//This file conatins calls related to API.
export const base_url = "http://localhost:8080";
export const baseVideoId = '84e96018-4022-434e-80bf-000ce4cd12b8';

export const getVideoList = async () => {
    try {
        const response = await axios.get(`${base_url}/videos`)
        return response;
    }
    catch (error) {
        console.log("Unable to fetch the videos list : ", error)
    }
}

export const getVideoDetails = async (videoId) => {
    try {
        const response = await axios.get(`${base_url}/videos/${videoId}`);
        return response;
    }
    catch (error) {
        console.log(`Unable to fetch video details of ${videoId} video : `, error)
    }
}

export const postComments = async (id, data) => {
    try {
        const response = await axios.post(`${base_url}/videos/${id}/comments`, data);
        return response;
    }
    catch (error) {
        console.log("Unable to fetch post the comment :" + error);
    }
}