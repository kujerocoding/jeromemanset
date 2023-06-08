import React from 'react'
import Logo from '../assets/logo.png'
import Resume from '../assets/Jerome Manset - Resume.pdf'

const Header = () => {

  return (
    <header className='w-full h-20'>
      <div className='flex items-center justify-between w-full h-full'>
        <a className='' href="" onClick={() => window.location.reload()}>
          <div className='pl-4'>
            <img src={Logo} className='w-12'></img>
          </div>
        </a>
        <div className='bg-accent text-action text-sm md:text-base w-1/3 md:w-1/6 h-full grid place-content-center hover-slide'>
          <a href={Resume} download >RESUME</a>
        </div>
      </div>
    </header>
  )
}

export default Header
