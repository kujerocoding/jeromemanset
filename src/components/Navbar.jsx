import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import Logo from '../assets/images/logo.png'

const NavBar = () => {

  return (
    <nav className='bg-dark'>
      <div className='w-11/12 mx-auto p-6  rounded-xl'>
        <ul className='flex items-center justify-between'>
          <li><a href="" onClick={() => window.location.reload()}><img src={Logo} className='w-12 h-12'></img></a></li>
          <div className='w-2/12 flex justify-between py-2 px-4 rounded-lg'>
              <li><a href="https://github.com/kujerocoding" target="_blank"><AiFillGithub className='icon' /></a></li>
              <li><a href=""><MdEmail className='icon' /></a></li>
              <li><a href="https://www.linkedin.com/in/jeromemanset22" target="_blank"><AiFillLinkedin className='icon' /></a></li>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
