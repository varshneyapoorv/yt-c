import React from 'react'
import { CiHome } from 'react-icons/ci'
import { MdSubscriptions } from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'
import { useSelector } from 'react-redux';



const sideBarItem = [
    {
        icons: <CiHome size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size={"24px"} />,
        title: "Subscription"
    },
    {
        icons: <CiHome size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size={"24px"} />,
        title: "Subscription"
    },
    {
        icons: <CiHome size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size={"24px"} />,
        title: "Subscription"
    },
    {
        icons: <CiHome size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size={"24px"} />,
        title: "Subscription"
    },
    {
        icons: <CiHome size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size={"24px"} />,
        title: "Subscription"
    },
    {
        icons: <CiHome size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size={"24px"} />,
        title: "Subscription"
    },
    {
        icons: <CiHome size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size={"24px"} />,
        title: "Subscription"
    },
    {
        icons: <CiHome size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size={"24px"} />,
        title: "Subscription"
    },
    {
        icons: <CiHome size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size={"24px"} />,
        title: "Subscription"
    },
    {
        icons: <CiHome size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size={"24px"} />,
        title: "Subscription"
    },
];



const Sidebar = () => {
  const open = useSelector((state) => state.app?.open ?? false);

  return (
    <>
    <div className=' relative'>

    
    <div className=' left-0 w-auto p-5 bg-white overflow-y-scroll h-[100vh] overflow-x-hidden ml-6'>
        {
            sideBarItem.map((item,index)=>{
                return (
                <div key ={index} className='flex  my-3 ml-[-17px]'>
         {item.icons}
         <p className={`ml-5 ${open ? '' : 'hidden'}`}>{item.title}</p>

      </div>
                )

            })
        }
      
      {/* <div className='flex  my-2'>
      <SiYoutubeshorts size={"24px"}/>
        <p>Short</p>
      </div>

      <div className='flex my-2'>
      <MdSubscriptions size={"24px"}/>
        <p>Subscription</p>
      </div> */}
    </div>
    </div>
    </>
  )
}

export default Sidebar
