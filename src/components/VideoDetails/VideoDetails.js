import axios from 'axios';
import './VideoDetails.scss';
import viewsIcon from '../../assets/images/icons/views.svg'
import likesIcon from '../../assets/images/icons/likes.svg'
import {TimeFormat} from '../../utils/TimeFormat';
import { base_url } from '../../utils/API';
import { useEffect, useState } from 'react';

// Component to display the video details based on the video object passed as a prop from the Video component
// Props are destructured and accessed in this component 
function VideoDetails({ mainVideo }) {
    const { id, channel, timestamp, views, likes, description } = mainVideo;
    const [likeCount, setLikeCount] =useState();
 
    useEffect(() => {
        setLikeCount(likes);
    }, [likes]);

    const handleLike = async (id) =>{
        console.log("click")
        const response = await axios.put(`${base_url}/videos/${id}/likes`)
        console.log(response.data)
        setLikeCount(response.data);
    }
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
                        <img onClick={() => handleLike(id)} className= "video__social--icons-like" src={likesIcon} alt='like-icon' />
                        <p>{likeCount}</p>
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