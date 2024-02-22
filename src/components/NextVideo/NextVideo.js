import './NextVideo.scss'
import VideoItem from "../VideoItem/VideoItem";

function NextVideo({nextVideo}) {

    return (
        <section className="next__video">
            <h3> NEXT VIDEOS</h3>
            <ul>
            {nextVideo.map((videos) => {
                return (
                    <VideoItem 
                        key={videos.id}
                        videos={videos}
                        // isActive={videos.id === currentVideo.id}
                        // setMainVideo={setMainVideo}
                        />
                )
            })}
        </ul>
        </section>
    )
}

export default NextVideo;