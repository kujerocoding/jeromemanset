import React from 'react'

const Links = ({handleClick, selectedProject}) => {

   


  return (
      <div className='h-full basis-1/4 grid place-content-center gap-8 bg-secondary rounded-2xl text-text'>
            <h2 className='text-2xl font-archivo uppercase'>My Projects</h2>
            <ul className='font-roboto flex flex-col gap-4 p-10'>
                <li>
                    <button name="eliteballers" 
                      className={`btn from-left  ${selectedProject === 'eliteballers' ? 'shit' : ''}`} 
                      onClick={handleClick}>
                      EliteBallers
                    </button>
                </li>
                <li>
                      <button name="gamehub" 
                      className={`btn from-left  ${selectedProject === 'gamehub' ? 'shit' : ''}`} 
                      onClick={handleClick}>
                        GameHub
                      </button>
                </li>
                <li>
                      <button name="animeclouds" 
                      className={`btn from-left  ${selectedProject === 'animeclouds' ? 'shit' : ''}`} 
                      onClick={handleClick}>
                        AnimeClouds
                      </button>
                </li>
            </ul>
            
        </div>
      
  )
}

export default Links
