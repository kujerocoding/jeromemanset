import { motion } from 'framer-motion'
import React from 'react'

const Project = ({filteredData, variants}) => {
  const {title, img, desc, technologies, liveURL, repoURL} = filteredData[0]
  console.log(filteredData[0])

  const marqueeVariants = {
    animate: {
      x: [150, -800],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };
  

  return (
    <motion.div 
     variants={variants}
      className='p-4 w-full h-full flex flex-col items-center justify-between bg-transparent text-center text-colorFont-400'>

        <h2 className='text-xl font-bold text-colorFont'>{title}</h2>
        <p className='sm:w-3/4'>{desc}</p>
        <div className='w-72 h-8 overflow-x-hidden mt-4'>
          <motion.div 
          className='whitespace-nowrap'
          variants={marqueeVariants}
          animate="animate"
          >
            {technologies.map((item, i) => (
              <span key={i} className='mr-10 font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-colorFrom to-colorTo'>{item}</span>
            ))}
          </motion.div>
        </div>
        <div className='max-w-[30rem] lg:max-w-[35rem]'>
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