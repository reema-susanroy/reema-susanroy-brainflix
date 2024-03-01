import './VideoDetails.scss';
import viewsIcon from '../../assets/images/icons/views.svg'
import likesIcon from '../../assets/images/icons/likes.svg'

function VideoDetails({ mainVideo }) {
    const { channel, timestamp, views, likes, description } = mainVideo;

    //convert timestamp to mm-dd-yyyy format
    const date = new Date(timestamp)
    const utcString= date.toISOString();
    const month = new Date(utcString).getUTCMonth() + 1;
    const dateValue = new Date(utcString).getUTCDate();
    const year = new Date(utcString).getUTCFullYear();

    return (
        <>
            <h1 className='video__title'>{mainVideo.title}</h1>
            <div className='video__container'>
                <div className='video__data'>
                    <p className='video__data--channel'>By {channel}</p>
                    <p className='video__data--time'>{`${month}/${dateValue}/${year}`}</p>
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