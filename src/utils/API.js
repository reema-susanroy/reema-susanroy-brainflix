import axios from "axios";

//This file conatins calls related to API.
export const api_url = "https://unit-3-project-api-0a5620414506.herokuapp.com";
export const api_key = "485e90e7-2da9-42b1-9f2e-b89898b94889";
export const baseVideoId = '84e96018-4022-434e-80bf-000ce4cd12b8';

export const getVideoList = async () => {
    try {
        const response = await axios.get('http://localhost:8080/videos')
        //axios.get(`${api_url}/videos?api_key=${api_key}`);
        return response;
    }
    catch (error) {
        console.log("Unable to fetch the videos list : ", error)
    }
}

export const getVideoDetails = async (videoId) => {
    try {
        const response = await axios.get(`http://localhost:8080/videos/${videoId}`);
        return response;
    }
    catch (error) {
        console.log(`Unable to fetch video details of ${videoId} video : `, error)
    }
}

export const postComments = async (id, data) => {
    try {
        const response = await axios.post(`${api_url}/videos/${id}/comments?api_key=${api_key}`, data);
        return response;
    }
    catch (error) {
        console.log("Unable to fetch post the comment :" + error);
    }
}