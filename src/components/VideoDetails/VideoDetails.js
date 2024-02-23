// import Video from '../Video/Video';
import './VideoDetails.scss';
// import {timeFormat} from '../CommentDisplay/CommentDisplay';
import viewsIcon from '../../assets/images/icons/views.svg'
import likesIcon from '../../assets/images/icons/likes.svg'


function VideoDetails({ mainVideo }) {
    console.log("Inside videosDeayils: " + { mainVideo });
    const {channel,timestamp,views,likes,description} = mainVideo;

    //calling timeFormat function
    const date = new Date(timestamp)
    const today = new Date();

    // const day = dayArray[date.getDay()];
    // const dateValue = ((String(date.getDate()).length) === 2 ? '' : '0') + date.getDate();
    const dateValue = date.getDate();
    const month = (date.getMonth()+1);
    const year =date.getFullYear();


    console.log(date)
    console.log(today);
    return (
        <div>
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
        </div>
    )
}

export default VideoDetails;