import MainVideo from "../../components/MainVideo/MainVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";
import NextVideo from "../../components/NextVideo/NextVideo";

import nextVideo from '../../data/videos.json'


function HomePage({ mainVideo , updateMainVideo }) {
        
    return (

        <>
            <MainVideo mainVideo={mainVideo} />
            <main className='video-information'>
                <section className='video-information__comments'>
                    <VideoDetails mainVideo={mainVideo} />
                    <Comments mainVideo={mainVideo} />
                </section>
                <section className='video-information__next-video'>
                    <NextVideo nextVideo={nextVideo} mainVideo={mainVideo} updateMainVideo={updateMainVideo} />
                </section>
            </main>
        </>
    )


}
export default HomePage;