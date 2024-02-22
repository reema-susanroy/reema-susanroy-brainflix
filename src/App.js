import React, { useState } from 'react';

import './App.scss';
import videoData from './data/video-details.json'
import nextVideo from './data/videos.json'

import Header from './components/Header/Header';
import Video from './components/Video/Video'
import VideoDetails from './components/VideoDetails/VideoDetails';
import Comments from './components/Comments/Comments';
import NextVideo from './components/NextVideo/NextVideo';

function App() {

  const [mainVideo, setMainVideo] = useState(videoData[0]);

  function updateMainVideo(clickedid) {
    const nextMainVideo = videoData.find((video) => video.id === clickedid)
    setMainVideo(nextMainVideo);
  }

  return (
    <div >
      <Header />
      <Video mainVideo={mainVideo} />
      <VideoDetails mainVideo={mainVideo} />
      <section >
        <Comments mainVideo={mainVideo} />
        <NextVideo nextVideo={nextVideo} mainVideo={mainVideo} updateMainVideo={updateMainVideo} />
      </section>
    </div>
  );
}

export default App;
