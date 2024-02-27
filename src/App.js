import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
// import videoData from './data/video-details.json'
// import nextVideo from './data/videos.json'
import Header from './components/Header/Header';
// import MainVideo from './components/MainVideo/MainVideo'
// import VideoDetails from './components/VideoDetails/VideoDetails';
// import Comments from './components/Comments/Comments';
// import NextVideo from './components/NextVideo/NextVideo';
import HomePage from './pages/HomePage/HomePage';

function App() {

  // const [mainVideo, setMainVideo] = useState(videoData[0]);

  // function updateMainVideo(clickedid) {
  //   const nextMainVideo = videoData.find((video) => video.id === clickedid)
  //   setMainVideo(nextMainVideo);
  // }

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:videoId" element = {<HomePage />}/>
          {/* <Route path="/upload" element = {}/> */}


        </Routes>
      </BrowserRouter>
      {/* <MainVideo mainVideo={mainVideo} />
      <main className='video-information'>
        <section className='video-information__comments'>
          <VideoDetails mainVideo={mainVideo} />
          <Comments mainVideo={mainVideo} />
        </section>
        <section className='video-information__next-video'>
          <NextVideo nextVideo={nextVideo} mainVideo={mainVideo} updateMainVideo={updateMainVideo} />
        </section>
      </main> */}
    </>
  );
}

export default App;
