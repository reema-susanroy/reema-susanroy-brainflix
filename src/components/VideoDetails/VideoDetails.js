import Video from '../Video/Video';
import './VideoDetails.scss';
import views from '../../assets/images/icons/views.svg'
import likes from '../../assets/images/icons/likes.svg'


function VideoDetails({ mainVideo }) {

    return (
        <main>
            <h1 className='video__title'>{mainVideo.title}</h1>
            <div className='video__container'>
                <div className='video__data'>
                    <p className='video__data--channel'>By {mainVideo.channel}</p>
                    <p className='video__data--time'>{mainVideo.timestamp}</p>
                </div>
                <div className='video__social'>
                    <div className='video__social--icons'>
                        <img src={views} alt='view-icon' />
                        <p>{mainVideo.views}</p>
                    </div>
                    <div className='video__social--icons'>
                        <img src={likes} alt='like-icon' />
                        <p>{mainVideo.likes}</p>
                    </div>
                </div>
            </div>
            <div>
                <p>{mainVideo.description} </p>
            </div>
        </main>
    )
}

export default VideoDetails;