// import Video from '../Video/Video';
import './VideoDetails.scss';
import viewsIcon from '../../assets/images/icons/views.svg'
import likesIcon from '../../assets/images/icons/likes.svg'


function VideoDetails({ mainVideo }) {
    console.log("Inside videosDeayils: " + { mainVideo });
    const {channel,timestamp,views,likes,description} = mainVideo;

    return (
        <main>
            <h1 className='video__title'>{mainVideo.title}</h1>
            <div className='video__container'>
                <div className='video__data'>
                    <p className='video__data--channel'>By {channel}</p>
                    <p className='video__data--time'>{timestamp}</p>
                </div>
                <div className='video__social'>
                    <div className='video__social--icons'>
                        <img src={viewsIcon} alt='view-icon' />
                        <p>{views}</p>
                    </div>
                    <div className='video__social--icons'>
                        <img src={likesIcon} alt='like-icon' />
                        <p>{likes}</p>
                    </div>
                </div>
            </div>
            <div>
                <p>{description} </p>
            </div>
        </main>
    )
}

export default VideoDetails;