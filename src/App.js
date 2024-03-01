import React from 'react';
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
import UploadPage from './pages/UploadPage/UploadPage';

function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:videoId" element = {<HomePage />}/>
          <Route path="/upload" element = {<UploadPage />}/>
          <Route path="*" element = {<></>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
