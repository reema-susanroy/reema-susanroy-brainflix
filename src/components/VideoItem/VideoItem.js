import { Link } from 'react-router-dom';
import './VideoItem.scss'

function VideoItem({ videos }) {

    const handleClick = () => {
        // updateMainVideo(videos.id);
    }
    return (
        <article className='video--container'>
            <li onClick={handleClick} key={videos.id} >
                <Link to={`/videos/${videos.id}`} className="video">
                    <div className="video__image">
                        <img className="video__image--img" src={videos.image} alt={videos.name} />
                    </div>
                    <div className='video__details'>
                        <p className='video__details--title'>{videos.title} </p>
                        <p className='video__details--author'> {videos.channel}</p>
                    </div>
                </Link>
            </li>
        </article>
    )
}

export default VideoItem;