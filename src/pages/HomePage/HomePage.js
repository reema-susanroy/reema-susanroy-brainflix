import { useParams, useSearchParams } from "react-router-dom";

import MainVideo from "../../components/MainVideo/MainVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";
import NextVideo from "../../components/NextVideo/NextVideo";

import nextVideo from '../../data/videos.json'


import { useEffect, useState } from "react";
import axios from "axios";


function HomePage() {
    
    const { videoId } = useParams();
    console.log({ videoId })


    const api_url = "https://unit-3-project-api-0a5620414506.herokuapp.com";
    const api_key = "485e90e7-2da9-42b1-9f2e-b89898b94889";

    const baseVideoId ="84e96018-4022-434e-80bf-000ce4cd12b8";

    const [mainVideo, setMainVideo] = useState([]);
    const [nextVideo, setNextVideo] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, sethasError] = useState(false);

    useEffect(() => {

        const fetchMainVideo = async () => {
            try {

                const response = await axios.get(`${api_url}/videos?api_key=${api_key}`)
                console.log(response.data);
                setNextVideo(response.data);

            }
            catch (error) {
                console.log("Unable to fetch videos : ", error)
            }

        }
        fetchMainVideo();
    }, []);


    useEffect(() => {

        const fetchVideoDetails = async (videoId) => {
            try {

                const response = await axios.get(`${api_url}/videos/${videoId}?api_key=${api_key}`)
                console.log(response.data);
                setMainVideo(response.data);
                setIsLoaded(true);
            }
            catch (error) {
                console.log("Unable to fetch videos : ", error)
            }

        }
        fetchVideoDetails(videoId || baseVideoId);
    }, [videoId]);

    if (!isLoaded) {
        return <div>Loading...</div>;
      }


    console.log({mainVideo})
    console.log({nextVideo})


    // console.log(mainVideo.timestamp);

    return (

        <>
            {nextVideo  && (
                <>

            <MainVideo mainVideo={mainVideo} />
            <main className='video-information'>
                <section className='video-information__comments'>
                    <VideoDetails mainVideo={mainVideo} />
                    <Comments mainVideo={mainVideo} />
                </section>
                <section className='video-information__next-video'>
                    <NextVideo nextVideo={nextVideo} mainVideo={mainVideo} />
                </section>
            </main>
            </>
            )}
        </>
    )


}
export default HomePage;