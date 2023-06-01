import { motion } from 'framer-motion'
import React from 'react'

const Project = ({filteredData, variants}) => {
  const {title, img, desc, liveURL, repoURL} = filteredData[0]
  console.log(filteredData[0])

  

  return (
    <motion.div 
     variants={variants}
      className='p-4 lg:p-10 w-full h-full text-primary flex flex-col justify-evenly items-center bg-transparent'>

        <h2 className='text-3xl'>{title}</h2>
        <p className=''>{desc}</p>
        <div className='max-w-[40rem]'>
          <img src={`../src/assets/images/${img}`} alt={`${title} picture`} ></img>
        </div>
        <div className='flex gap-4'>
          <a href={liveURL} target='_blank'><button className='btn-external btn-shrink-border'>View Website</button></a>
          <a href={repoURL} target='_blank'><button className='btn-external btn-shrink-border'>Source Code</button></a>
        </div>
    </motion.div>
  )
}

export default Project