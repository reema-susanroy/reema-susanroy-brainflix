import './NextVideo.scss'
import VideoItem from "../VideoItem/VideoItem";

function NextVideo({nextVideo , mainVideo, updateMainVideo}) {

    return (
        <section className="next__video">
            <h3> NEXT VIDEOS</h3>
            <ul>
            {nextVideo.map((videos) => {
                return (
                    <VideoItem 
                        key={videos.id}
                        videos={videos}
                        isPlaying={videos.id === mainVideo.id}
                        updateMainVideo={updateMainVideo}
                        />
                )
            })}
        </ul>
        </section>
    )
}

export default NextVideo;