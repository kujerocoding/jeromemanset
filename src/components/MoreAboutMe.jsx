import React from 'react'
import ProfilePic from '../assets/ProfilePic.png'
import { FaAngleLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'


const MoreAboutMe = ({setSelectedProject, itemVariants}) => {

  const variants = {
    hidden: { opacity: 0, x: -200 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: 200,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div 
    variants={variants}
    className='mt-60 lg:mt-0 p-4 lg:p-10 flex flex-col text-center lg:text-left text-colorFont-400 tracking-wide'>
      <div className='flex flex-col items-center lg:flex-row'>
        <motion.div 
        variants={itemVariants}
        className='w-48 m-4 lg:basis-1/3'>
          <img src={ProfilePic} alt="profile pic" className='w-full h-full' />
        </motion.div>
        <div className='lg:basis-2/3'>
          <h1 className='text-xl lg:text-3xl text-colorFont md:mb-4 font-bold'>Snapshot of who I am</h1>
          <p className='text-sm md:text-base sm:w-2/3 mx-auto '>My name is Jerome Manset, I am a self-taught <span className=' text-colorFrom'>front-end web developer</span> with a strong background in network engineering, passionate about creating modern and user-friendly web experiences. The ever-evolving nature of web development excites me, and I actively seek opportunities to expand my skill set and embrace emerging frameworks and tools.</p>
        </div>
      </div>
      <h2 className='text-colorFont mt-6 text-lg lg:text-xl'>When I'm not developing...</h2>
      <p className='sm:w-2/3 sm:mx-auto lg:mx-0 lg:w-4/5 mt-4 text-sm md:text-base'>You can often find me pursuing my other passions: playing basketball and online games. These hobbies provide me with a balance in my life, allowing me to unwind and find inspiration in different ways.</p>
      <div className='mt-6 font-bold'>
          <button onClick={() => setSelectedProject('aboutme')}>
              <div className='flex gap-3 items-center justify-center hover:-translate-x-5 transition duration-300 ease-in-out'>
                  <FaAngleLeft className='w-5 h-5' />
                  <p>BACK</p>
              </div>
          </button>
      </div>
    </motion.div>
  )
}

export default MoreAboutMe