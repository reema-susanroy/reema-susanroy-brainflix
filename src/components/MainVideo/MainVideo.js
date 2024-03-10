import './MainVideo.scss';
import fullScreenImg from '../../assets/images/icons/fullscreen.svg'
import close_fullscreen from '../../assets/images/icons/close_fullscreen.svg'
import play from '../../assets/images/icons/play.svg'
import pause from '../../assets/images/icons/pause.svg'
import scrub from '../../assets/images/icons/scrub.svg'
import volumeOff from '../../assets/images/icons/volume_off.svg'
import volumeUp from '../../assets/images/icons/volume_up.svg'
import { useState, useRef, useEffect } from 'react';

//Component to display the video image on UI. Retrieve the image from the video object passed as props.
function MainVideo({ mainVideo }) {

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    // const [fullscreen, setFullscreen] = useState(false);
    const [volume, setVolume] = useState(1);
    const [volIcon, setVolIcon] = useState(volumeUp);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [videoStart , setVideoStart] =useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            const handleLoadedMetadata = () => {
                setDuration(videoRef.current.duration);
              };
            //   videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

            setPlaying(false);
            setCurrentTime(0);
            // setDuration(0);
            // return () => {
            //     videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
            //   };
        }
    }, [mainVideo]);

    // useEffect(() => {
    //     setDuration(0);
    //     // console.log("duration" + duration)
    // },[]);
    useEffect(() => {
        return () => {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        };
      }, [videoRef]);

      const handleMetadataLoad = () => {
        const videoDuration = videoRef.current.duration;
        const formattedDuration = formatTime(videoDuration);
        setDuration(formattedDuration);
      };


    const handleVideoEnd=()=>{
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
    }
    
    const formatTime = (time) => {
        if(time==0){
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

            <video ref={videoRef} onTimeUpdate={updateProgress} onEnded={handleVideoEnd} onLoadedMetadata={() => {
          setDuration(videoRef.current.duration);
        }} className="video--player" poster={`http://localhost:8080/${mainVideo.image}`}  src={`http://localhost:8080/${mainVideo.video}`}></video>
            <section className="controls">

                <div className='button_container'>
                    <button onClick={togglePlayPause} className="play-pause background-color">
                        <img className="background" src={playing ? pause : play} alt="play-button" />
                    </button>
                </div>

                <div className='scrub_container background-color'>
                    <div className="scrubber" onClick={handleSeek}>
                        <img src={scrub} alt="scrub" />
                    </div>
                    {/* <div className="time ">{formatTime(currentTime, duration)}</div> */}
                   
                    <div className="time "> {formatTime(currentTime)} / {formatTime(duration) } </div>
                    {/* {setVideoStart ? (<>{Number(formatTime(duration))} </>) : (<>{formatTime(currentTime)} </>) } </div> */}
         
         
                </div>

                <div className='volume_container  '>
                    <button onClick={toggleFullscreen} id="fullscreen" className='background-color'>
                        <img src={fullScreenImg} alt="fullscreen" className='togglebutton' />
                    </button>
                    <button onClick={toggleVolume} id="volume" className='background-color' type="range" min="0" max="1" step="0.1" value="1">
                        <img src={volIcon} alt="fullscreen" className='togglebutton' />
                    </button>
                </div>

            </section>
        </div>
    )
}
export default MainVideo;