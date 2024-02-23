import './NextVideo.scss'
import VideoItem from "../VideoItem/VideoItem";

function NextVideo({ nextVideo, mainVideo, updateMainVideo }) {
    const filteredVideos = nextVideo.filter((video) =>
        video.id !== mainVideo.id);

    return (
        <section className="next__video">
            <h3> NEXT VIDEOS</h3>
            <ul>
                {filteredVideos.map((videos) => {
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