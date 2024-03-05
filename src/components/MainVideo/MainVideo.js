import './MainVideo.scss';

//Component to display the video image on UI. Retrieve the image from the video object passed as props.
function MainVideo({ mainVideo }){
    
    return(
        <div className="video__player">

            {/* poster attribute displays the image as video placeholder.
            controls attribute is to add video controls which is not for this sprint */}
            <video className='video__player--image' controls poster={`http://localhost:8080/${mainVideo.image}`} >
            </video>
        </div>
    )
}


export default MainVideo;