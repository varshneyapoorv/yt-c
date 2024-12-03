
import Avatar from 'react-avatar'
import { CiSearch, CiVideoOn } from 'react-icons/ci'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosNotificationsOutline } from 'react-icons/io'

import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../utils/appSlice'


const Navbar = () => {

  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleSidebar());
  }


  return (
    <div className='flex top-0 fixed justify-center items-center w-[100%] z-10 bg-white' >
        <div className='flex w-[96%]  py-3 justify-between items-center'>

        
      <div className='flex items-center'>

      <GiHamburgerMenu className='cursor-pointer' onClick={toggleHandler} size={"24px"}/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png" alt="yt_logo" width={"115px"} className='px-4'/>
      </div>
      <div className='flex w-[40%] items-center'> 
        <div className='mt-2 rounded-l-full w-[100%] py-2 px-1 border border-gray-400'>
            <input type="text" placeholder='Search' className=' w-full outline-none' />
        </div>
        <button className='py-2 border mt-2 rounded-r-full px-4 border-gray-400'><CiSearch size={"24px"}/></button>
      </div>
      <div className='flex items-center w-[10%] justify-between'>
        <IoIosNotificationsOutline size={"24px"}  className='cursor-pointer'/>
        <CiVideoOn size={"24px"} className='cursor-pointer'/>
        <Avatar src='https://m.media-amazon.com/images/I/817-ehv65jL.png' size={35} round={true}/>
      </div>
      </div>
    </div>
  )
}

export default Navbar
