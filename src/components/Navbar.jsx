import React from 'react'
import Logo from '../assets/images/logo.png'

const NavBar = () => {

  return (
    <nav className='pl-8 w-full h-16'>
      
        <div className='flex items-center justify-between w-full h-full'>
          <a className='' href="" onClick={() => window.location.reload()}>
            <div className=''>
              <img src={Logo} className='w-12'></img>
             {/*  <p className='text-primary'>Jerome Manset</p> */}
            </div>
          </a>
          <div className='bg-accent text-action text-sm md:text-base w-1/3 md:w-1/6 h-full grid place-content-center hover-slide'>
            <a href="mailto:jerome.manset22@gmail.com">CONTACT ME</a>
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
