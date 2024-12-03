import axios from "axios";
import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "./constant/youtube";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";

const VideoContainer = ({item}) => {

  const [video, setVideo] = useState([]);
  // JAB BHI AAPP APP CALL/NETWORK CALL KR RHE HO TO APKO HAMESHA useEffect USE KRNA CHAHIYE

  useEffect(() => {
    const fetchingYoutubeVideo = async () => {
      try {
        const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
        setVideo(res?.data?.items);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };
  
    fetchingYoutubeVideo();
  }, []); // Empty array because no dependencies need tracking.
  

  return (
    <div className="grid grid-cols-4 gap-2">

      {
        video.map((item)=>{
          return (
            <Link to={`/watch?v=${item.id}`}  key={item.id}>
            <VideoCart item = {item}/>
            </Link>
          )
        })
      }
      
    </div>
  );
};

export default VideoContainer;
