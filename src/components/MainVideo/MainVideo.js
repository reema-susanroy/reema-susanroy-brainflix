import './MainVideo.scss';
import fullScreenImg from '../../assets/images/icons/fullscreen.svg'
// import close_fullscreen from '../../assets/images/icons/close_fullscreen.svg'
import play from '../../assets/images/icons/play.svg'
import pause from '../../assets/images/icons/pause.svg'
// import scrub from '../../assets/images/icons/scrub.svg'
import volumeOff from '../../assets/images/icons/volume_off.svg'
import volumeUp from '../../assets/images/icons/volume_up.svg'
import { useState, useRef, useEffect } from 'react';
import {base_url} from '../../utils/API'

//Component to display the video image on UI. Retrieve the image from the video object passed as props.
function MainVideo({ mainVideo }) {

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    // const [fullscreen, setFullscreen] = useState(false);
    const [volume, setVolume] = useState(1);
    const [volIcon, setVolIcon] = useState(volumeUp);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [videoStart, setVideoStart] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            // const handleLoadedMetadata = () => {
            //     setDuration(videoRef.current.duration);
            //   };
            //   videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

            setPlaying(false);
            setCurrentTime(0);
            // setDuration(0);
            // return () => {
            //     videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
            //   };
        }
    }, [mainVideo]);

    useEffect(() => {
        return () => {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        };
    }, [videoRef]);

    const handleVideoEnd = () => {
        setPlaying(false);
    }
    const togglePlayPause = () => {
        console.log("clicked")
        setVideoStart(true);
        setDuration(videoRef.current.duration);
        if (videoRef.current.paused) {
            videoRef.current.play();
            setPlaying(true);
        } else {
            videoRef.current.pause();
            setPlaying(false);
        }
        // setPlaying(!playing);
    }
    const toggleFullscreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
        else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        // setFullscreen(!fullscreen);
    }

    const toggleVolume = () => {
        if (volume > 0) {
            // setVolume(videoRef.current.volume - 0.1);
            // videoRef.current.volume = volume;
            setVolIcon(volumeUp)
        }
        // else if (videoRef.current.volume < 1) {
        //     // setVolume(videoRef.current.volume + 0.1);
        //     // videoRef.current.volume = volume;
        //     setVolIcon(true)
        // }
        else
            setVolIcon(volumeOff)
    }

    const updateProgress = () => {
        setCurrentTime(videoRef.current.currentTime);
        // setDuration(videoRef.current.duration);
        // console.log(Number(videoRef.current.duration))
    }

    const handleSeek = (e) => {
        const seekTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * duration;
        videoRef.current.currentTime = seekTime;
        // const scrubberWidth = e.target.offsetWidth;
        // const clickPosition = e.nativeEvent.offsetX;
        // const seekTime = (clickPosition / scrubberWidth) * duration;
        // videoRef.current.currentTime = seekTime;
    }

    const formatTime = (time) => {
        if (time === 0) {
            return "00:00";
        }
        const minutes = Math.floor(time / 60);
        // console.log("minutes"+minutes)
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    return (
        <div className="video__player">

            {/* poster attribute displays the image as video placeholder.
            controls attribute is to add video controls which is not for this sprint */}
            {/* <video className='video__player--image' controls poster={`http://localhost:8080/${mainVideo.image}`} >
            </video> */}

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
                    <button onClick={toggleFullscreen} id="fullscreen" className='video__player--volumeCont__button'>
                        <img src={fullScreenImg} alt="fullscreen" className='video__player--togglebutton' />
                    </button>
                    <button onClick={toggleVolume} id="volume" className='video__player--volumeCont__button' type="range" min="0" max="1" step="0.1" value="1">
                        <img src={volIcon} alt="fullscreen" className='video__player--togglebutton' />
                    </button>
                </div>
            </section>
        </div>
    )
}
export default MainVideo;