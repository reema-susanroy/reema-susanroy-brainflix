import './MainVideo.scss';
import fullScreenImg from '../../assets/images/icons/fullscreen.svg'
import play from '../../assets/images/icons/play.svg'
import pause from '../../assets/images/icons/pause.svg'
import volumeOff from '../../assets/images/icons/volume_off.svg'
import volumeUp from '../../assets/images/icons/volume_up.svg'
import { useState, useRef, useEffect } from 'react';
import { base_url } from '../../utils/API'

//Component to display the video image on UI. Retrieve the image from the video object passed as props.
function MainVideo({ mainVideo }) {

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            setPlaying(false);
            setCurrentTime(0);
        }
    }, [mainVideo]);

    useEffect(() => {
        const currentVideoRef = videoRef.current;
        return () => {
            if (currentVideoRef) {
                currentVideoRef.pause();
                currentVideoRef.currentTime = 0;
            }
        };
    }, [videoRef]);

    const handleVideoEnd = () => {
        setPlaying(false);
    }
    const togglePlayPause = () => {
        setDuration(videoRef.current.duration);
        if (videoRef.current.paused) {
            videoRef.current.play();
            setPlaying(true);
        } else {
            videoRef.current.pause();
            setPlaying(false);
        }
    }
    const toggleFullscreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
        else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }

    const toggleVolume = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setVolume(!volume);
    }

    const updateProgress = () => {
        setCurrentTime(videoRef.current.currentTime);
    }

    const handleSeek = (e) => {
        const scrubberWidth = e.target.offsetWidth;
        const clickPosition = e.nativeEvent.offsetX;
        const seekTime = (clickPosition / scrubberWidth) * duration;
        videoRef.current.currentTime = seekTime;
    }

    const formatTime = (time) => {
        if (time === 0) {
            return "00:00";
        }
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    return (
        <div className="video__player">
            
            {/* - poster attribute displays the image as video placeholder.
                - custom video controls to make video functional */}

            <video ref={videoRef} onTimeUpdate={updateProgress} onEnded={handleVideoEnd}
                onLoadedMetadata={() => {
                    setDuration(videoRef.current.duration);
                }}
                className="video__player--video" poster={`${base_url}/${mainVideo.image}`} src={`${base_url}/${mainVideo.video}`}></video>
            <section className="video__player--controls">
                <div className='video__player--buttonCont'>
                    <button onClick={togglePlayPause} className="video__player--background">
                        <img className='video__player--buttonCont__button' src={playing ? pause : play} alt="play-button" />
                    </button>
                </div>
                <div className='video__player--scrubCont video__player--background'>
                    <div className="video__player--scrubCont__scrubber" onClick={handleSeek}  >
                        {/* <img src={scrub} alt="scrub" /> */}
                    </div>
                    <div className=" ">
                        <p className='video__player--scrubCont__time'>{formatTime(currentTime)} / {formatTime(duration)}</p>
                    </div>
                </div>
                <div className='video__player--volumeCont'>
                    <button onClick={toggleFullscreen} className='video__player--volumeCont__button'>
                        <img src={fullScreenImg} alt="fullscreen" className='video__player--togglebutton' />
                    </button>
                    <button onClick={toggleVolume} className='video__player--volumeCont__button'>
                        <img src={volume ? volumeUp : volumeOff} alt="video-volume" className='video__player--togglebutton' />
                    </button>
                </div>
            </section>
        </div>
    )
}
export default MainVideo;