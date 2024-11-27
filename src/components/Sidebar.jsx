import React from 'react'
import { CiHome } from 'react-icons/ci'
import { MdSubscriptions } from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'



const sideBarItem = [
    {
        icons: <CiHome size={"24px"} />,
        title: "Home"
    },
    {
        icons: <CiHome size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size={"24px"} />,
        title: "Subscription"
    },
];



const Sidebar = () => {
  return (
    <div className=' ml-4'>
        {
            sideBarItem.map((item,index)=>{
                return (
                <div key ={index} className='flex  my-3'>
        {item.icons}
        <p>{item.title}</p>
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
  )
}

export default Sidebar
