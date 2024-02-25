import './VideoItem.scss'

function VideoItem({ videos, updateMainVideo}) {

    const handleClick = () => {
        updateMainVideo(videos.id);
    }
    return (
            <article className='video--container'>
                <li onClick= {handleClick} className="video">
                    <div key={videos.id} className="video__image">
                        <img className="video__image--img" src={videos.image} alt={videos.name} />
                    </div>
                    <div className='video__details'>
                        <p className='video__details--title'>{videos.title} </p>
                        <p className='video__details--author'> {videos.channel}</p>
                    </div>
                </li>
            </article>
    )
}

export default VideoItem;