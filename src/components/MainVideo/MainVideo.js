import './MainVideo.scss';

function MainVideo({ mainVideo }){
    console.log({mainVideo});
    
    return(
        <div className="video__player">
            <video className='video__player--image' controls poster={mainVideo.image} >
            </video>
        </div>
    )
}


export default MainVideo;