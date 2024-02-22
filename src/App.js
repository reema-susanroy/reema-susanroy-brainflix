// import logo from './logo.svg';
import React, { useState } from 'react';

import './App.scss';
// import './styles/partials/global.scss';
import VideoData from './data/video-details.json'

import Header from './components/Header/Header';
import Video from './components/Video/Video'
import VideoDetails from './components/VideoDetails/VideoDetails';
import Comments from './components/Comments/Comments';

function App() {

  const [mainVideo, setMainVideo] = useState(VideoData[0]);

  // useEffect(() => {
  //   setMainVideo(VideoData[0]); 
  // }, []);
  return ( 
    <div >
        <Header />
        <Video mainVideo={mainVideo}/>
        <VideoDetails mainVideo={mainVideo}/>
        <Comments mainVideo={mainVideo}/>
    </div>
  );
}

export default App;
