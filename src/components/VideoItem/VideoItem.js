import { Link } from 'react-router-dom';
import './VideoItem.scss'

function VideoItem({ videos }) {

    return (
        <article className='video--container'>
            <li key={videos.id} >
                <Link to={`/videos/${videos.id}`} className="video">
                    <div className="video__image">
                        <img className="video__image--img" src={`http://localhost:8080/${videos.image}`} alt={videos.name} />
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