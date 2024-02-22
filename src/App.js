// import logo from './logo.svg';
import React, { useState } from 'react';

import './App.scss';
// import './styles/partials/global.scss';
import VideoData from './data/video-details.json'
import nextVideo from './data/videos.json'

import Header from './components/Header/Header';
import Video from './components/Video/Video'
import VideoDetails from './components/VideoDetails/VideoDetails';
import Comments from './components/Comments/Comments';
import NextVideo from './components/NextVideo/NextVideo';

function App() {

  const [mainVideo, setMainVideo] = useState(VideoData[0]);
  console.log({ nextVideo });

  // function updateMainVideo(id){
  //   let nextMainVideo = nextVideo.find((video) => video.id === id)
  //   setMainVideo(nextMainVideo);
  // }

  return (
    <div >
      <Header />
      <Video mainVideo={mainVideo} />
      <VideoDetails mainVideo={mainVideo} />
      <section >
        <Comments mainVideo={mainVideo} />
        <NextVideo nextVideo={nextVideo} />
      </section>

      {/* currentVideo={mainVideo} */}
    </div>
  );
}

export default App;
