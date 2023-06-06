import React from 'react'
import ProfilePic from '../assets/images/jerome.jpg'
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
    className='p-4 lg:p-10 flex flex-col text-colorFont-400'>
      <div className='flex gap-4 md:gap-10 sm:items-center'>
        <motion.div 
        variants={itemVariants}
        className='basis-40 sm:basis-32 hover:outline-2 outline-double outline-primary '>
          <img src={ProfilePic} alt="profile pic" className='w-full h-full' />
        </motion.div>
        <div className='basis-96 sm:basis-4/6'>
          <h1 className='text-xl lg:text-3xl text-colorFont md:mb-4 font-bold'>Snapshot of who I am</h1>
          <p className='text-sm md:text-base'>My name is Jerome Manset, I am a self-taught web developer with a strong background in network engineering, passionate about creating modern and user-friendly web experiences. The ever-evolving nature of web development excites me, and I actively seek opportunities to expand my skill set and embrace emerging frameworks and tools.</p>
        </div>
      </div>
      <h2 className='text-colorFont mt-6 text-lg lg:text-xl'>When I'm not developing...</h2>
      <p className='lg:w-4/5 mt-4'>You can often find me pursuing my other passions: playing basketball and exploring the realm of online games. These hobbies provide me with a balance in my life, allowing me to unwind and find inspiration in different ways.</p>
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