import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import MainVideo from "../../components/MainVideo/MainVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";
import NextVideo from "../../components/NextVideo/NextVideo";
import Loading from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";

import {baseVideoId, getVideoList, getVideoDetails } from "../../utils/API";

//Component to fetch videolist and video description for the selected/default video from the API
function HomePage() {
    const { videoId } = useParams();
    const [mainVideo, setMainVideo] = useState([]);
    const [nextVideo, setNextVideo] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, sethasError] = useState(false);

    useEffect(() => {
        const fetchMainVideo = async () => {
            try {
                const response = await getVideoList();
                setNextVideo(response.data);
            }
            catch (error) {
                console.log("Unable to fetch the videos list : ", error)
                sethasError(true);
            }
        }
        fetchMainVideo();
    }, []);

    useEffect(() => {
          const fetchVideoDetails = async (videoId) => {
            try {
                const response = await getVideoDetails(videoId);
                setMainVideo(response.data);
                setIsLoaded(true);
            }
            catch (error) {
                console.log(`Unable to fetch video details of ${videoId} video : `, error)
            }
        }
        fetchVideoDetails(videoId || baseVideoId);   
    }, [videoId]);

    if (!isLoaded) {
        return <Loading />;
    }
    if (hasError) {
        return <ErrorPage />;
    }

    return (
        <>
            {nextVideo && (
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