import React from 'react'
import ProjectData from '../ProjectData'

const Links = ({handleClick, selectedProject}) => {

   


  return (
      <div className='relative basis-1/4 grid place-content-center gap-8 text-primary'>
           <div className='my-5'>
            <h2 className='text-2xl mb-4 font-bold'>My Projects</h2>
            <ul className='relative p-5 flex flex-col gap-4'>
                <div className='absolute top-0 left-0 w-1/2 h-2/5 border-t-2 border-border border-l-2'></div>
                {ProjectData.map(item => {
                  const {id, name, title} = item
                  return <li key={id}>
                    <button name={name}
                    className={`btn from-left  ${selectedProject === name ? 'shit' : ''}`}
                    onClick={handleClick}
                    >{title}</button>
                  </li>
                })}
            </ul>
           </div>
            <div className='absolute -bottom-5 right-10 text-sm'>
              <p>Copyright © 2023 jeromemanset.com</p>
            </div>
        </div>
      
  )
}

export default Links


{/* <li>
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
                  </li> */}