import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import Logo from '../assets/images/logo.png'

const NavBar = () => {

  return (
    <nav className='pl-8 bg-transparent border-[1px] border-border w-full h-16'>
      
        <div className='flex items-center justify-between w-full h-full'>
          <a className='' href="" onClick={() => window.location.reload()}>
            <div className='flex items-center gap-4'>
              <img src={Logo} className='w-12'></img>
              <p className='text-primary'>Jerome Manset</p>
            </div>
          </a>
          <div className=' bg-primary z-10 text-white w-1/3 md:w-1/5 h-full grid place-content-center'>
            <button>CONTACT ME</button>
          </div>
          {/* <ul className='w-2/12 flex justify-between py-2 px-4 rounded-lg'>
              <li><a href="https://www.linkedin.com/in/jeromemanset22" target="_blank"><AiFillLinkedin className='icon' /></a></li>
              <li><a href="https://github.com/kujerocoding" target="_blank"><AiFillGithub className='icon' /></a></li>
              <li><a href=""><MdEmail className='icon' /></a></li>
          </ul> */}
        </div>
    </nav>
  )
}

export default NavBar
