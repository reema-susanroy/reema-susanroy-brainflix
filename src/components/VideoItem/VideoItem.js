import './VideoItem.scss'

function VideoItem({ videos }) {

    return (
            <article className='video--container'>
                <li className="video">
                    <div key={videos.id} className="video__image container">
                        <img className="video__image--img" src={videos.image} alt={videos.name} />
                    </div>
                    <div className='video__details'>
                        <p>{videos.title} </p>
                        <p> {videos.channel}</p>
                    </div>
                </li>
            </article>
    )
}

export default VideoItem;