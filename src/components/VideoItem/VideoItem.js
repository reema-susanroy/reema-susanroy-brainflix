import { Link } from 'react-router-dom';
import './VideoItem.scss'
import { base_url } from '../../utils/API';

function VideoItem({ videos }) {
    return (
        <article className='video--container'>
            <li key={videos.id} >
                <Link to={`/videos/${videos.id}`} className="video">
                    <div className="video__image">
                        <img className="video__image--img" src={`${base_url}/${videos.image}`} alt={videos.name} />
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