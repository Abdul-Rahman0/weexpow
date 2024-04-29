import React from 'react';
import './../../App.css'; 


const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video-bg">
        <source src="https://videos.pexels.com/video-files/12920674/12920674-hd_1920_1080_30fps.mp4" type="video/mp4" />
        {/* Add additional source elements for other video formats */}
      </video>
      <div className="content">
        <h1>Welcome to Our Website</h1>
        <p>This is some text overlaying the video background.</p>
      </div>
    </div>
  );
}

export default VideoBackground;
