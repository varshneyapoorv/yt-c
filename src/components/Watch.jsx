import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "./constant/youtube";
import Avatar from "react-avatar";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { PiShareFatFill, PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";



const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [singleVideo, setSingleVideo] = useState(null);

  useEffect(() => {
    const getSingleVideo = async () => {
      try {
        const res = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&regionCode=IN&key=${API_KEY}`
        );
        setSingleVideo(res?.data?.items[0]); // Access res.data directly
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    getSingleVideo(); // Call the function
  }, []);
  //   console.log(singleVideo)

  return (
    <div className="flex justify-between ml-4 mt-4">
      <div>
      <div className="ml-4">
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <h2 className="font-bold mt-2 text-lg">
          {singleVideo?.snippet?.title}
        </h2>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between w-[30%]">
          <div className="flex">
            <Avatar
              src="https://m.media-amazon.com/images/I/817-ehv65jL.png"
              size={35}
              round={true}
            />
            <h2 className="font-bold ml-2">{singleVideo?.snippet?.channelTitle}</h2>
          </div>
          <button className="px-3 py-1 font-medium bg-black text-white rounded-full">
            Subscribe
          </button>
        </div>
        <div className="flex items-center w-[40%] justify-between mt-2">
          {/* Like and Dislike Buttons */}
          <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
            <AiOutlineLike size={24} className="mr-2" />
            <AiOutlineDislike size={24} />
          </div>

          {/* Share Button */}
          <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
            <PiShareFatFill size={24} className="mr-2" />
            <span className="text-black">Share</span>
          </div>

          {/* Download */}
          <div className=" flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
          <GoDownload />

            <span className="text-black">
                Download
            </span>
          </div>
        </div>
      </div>
      </div>

      <div>
        <div>
          <h2>Top Chart</h2>
          <BsThreeDotsVertical />

        </div>
      </div>
    </div>
  );
};

export default Watch;
