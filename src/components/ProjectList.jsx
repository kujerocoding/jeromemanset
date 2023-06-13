import React from 'react'
import ProjectData from '../ProjectData'

const ProjectList = ({handleClick, selectedProject}) => {

  const style = `${selectedProject === 'moreaboutme' ? "mt-64 lg:mt-0" : "mt-0"} relative basis-1/3 grid place-content-center gap-8 pb-10 lg:pb-0 text-colorFont-400`

  return (
    <div className={style}>
      <div className='my-5'>
          <h2 className='text-2xl mb-8 font-bold text-colorFont'>My Projects</h2>
          <ul className='relative p-8 flex flex-col gap-4'>
              <div className='absolute rounded-md top-0 left-0 w-1/2 h-2/5 bg-gradient-to-r from-colorFrom  to-colorTo pt-1 pl-1'><div className='h-full w-full bg-colorBG'></div></div>
                {ProjectData.map(item => {
                  const {id, name, title} = item
                  return <li key={id}>
                    <button name={name}
                    className={`btn from-left  ${selectedProject === name ? 'active' : ''}`}
                    onClick={handleClick}
                    >
                      {title}
                    </button>
                  </li>
                })}
          </ul>
      </div>
      <div className='absolute w-full -bottom-5 lg:bottom-0'>
        <div className='mb-5 lg:-mb-2 text-center md:text-right'>
          <p className='md:mr-10 text-sm'>Copyright © 2023 jeromemanset.com</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectList