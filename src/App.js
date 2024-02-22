// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

import './App.scss';
// import './styles/partials/global.scss';
import VideoData from './data/video-details.json'

import Header from './components/Header/Header';
import Video from './components/Video/Video'
import VideoDetails from './components/VideoDetails/VideoDetails';


function App() {

  const [mainVideo, setMainVideo] = useState({});

  useEffect(() => {
    // Simulate fetching data from provided files
    setMainVideo(VideoData[0]); // Assuming the first video is the main video
  }, []);

  return ( 
    <div >
        <Header />
        <Video mainVideo={mainVideo}/>
        <VideoDetails mainVideo={mainVideo}/>

    </div>
  );
}

export default App;
