import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'

const NavBar = () => {

  return (
    <nav className='bg-pink-500'>
      <ul className='w-11/12 mx-auto flex items-center justify-between b-black'>
        <li><a href="" onClick={() => window.location.reload()}><MdEmail className='w-10 h-10'/></a></li>
        <div className='w-2/12 flex justify-between'>
            <li><a href="https://github.com/kujerocoding" target="_blank"><AiFillGithub className='icon' /></a></li>
            <li><a href=""><MdEmail className='icon' /></a></li>
            <li><a href="https://www.linkedin.com/in/jeromemanset22" target="_blank"><AiFillLinkedin className='icon' /></a></li>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar
