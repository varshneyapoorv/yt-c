import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "./constant/youtube";
import Avatar from "react-avatar";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { PiShareFatFill, PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatSlice";







const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [singleVideo, setSingleVideo] = useState(null);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

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


  const sendMessage = ()=>{
    // alert(input)
    dispatch(setMessage({
      name : "Apoorv",
      message : input,
    }));
    setInput("");
  }

  return (
    <div className="flex ml-4 mt-4 w-[100%]">
      <div className="flex w-[88%]">
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

      <div className='w-[100%] border border-gray-300 ml-8 rounded-lg h-fit p-4'>
        <div className="flex justify-between items-center">
          <h2>Top Chart</h2>
          <BsThreeDotsVertical />

        </div>
        <div className='overflow-y-auto h-[28rem] flex flex-col-reverse'>
          <LiveChat/>
        </div>
        {/* <div className="overflow-y-auto h-[28rem]">
          Chats
        </div> */}

        <div className="flex items-center justify-between border-t p-2">
          <div className="flex items-center w-[90%]">
            <div>
            <Avatar src='https://m.media-amazon.com/images/I/817-ehv65jL.png' size={35} round={true}/>
            </div>
            <input value={input} onChange = {(e)=>setInput(e.target.value)} className="border-b border-gray-300 outline-none ml-2" type="text" placeholder="Send Message...."/>
            <div>
            <div className="bg-gray-200 cursor-pointer p-2 rounded-full">
            <IoSend onClick={sendMessage}/>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Watch;
