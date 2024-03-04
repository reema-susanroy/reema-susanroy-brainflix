import './VideoDetails.scss';
import viewsIcon from '../../assets/images/icons/views.svg'
import likesIcon from '../../assets/images/icons/likes.svg'
import {TimeFormat} from '../../utils/TimeFormat';

// Component to display the video details based on the video object passed as a prop from the Video component
// Props are destructured and accessed in this component 
function VideoDetails({ mainVideo }) {
    const { channel, timestamp, views, likes, description } = mainVideo;

    return (
        <>
            <h1 className='video__title'>{mainVideo.title}</h1>
            <div className='video__container'>
                <div className='video__data'>
                    <p className='video__data--channel'>By {channel}</p>
                    <p className='video__data--time'>{TimeFormat(timestamp)}</p>
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
                <p className='video__description'>{description} </p>
            </div>
        </>
    )
}

export default VideoDetails;