import { motion } from 'framer-motion'
import React from 'react'
import {FaAngleRight} from 'react-icons/fa'


const AboutMe = ({setSelectedProject, itemVariants}) => {

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
    className='p-4 lg:p-10 lg:pl-32 flex flex-col text-center lg:text-left text-colorFont-400'>
        <div className='text-4xl sm:text-4xl md:text-6xl font-bold text-colorFont'>
            <h1>Hi, I'm Jerome</h1>
        </div>
        <motion.div 
        variants={itemVariants}
        className='pb-10 text-2xl sm:text-3xl md:text-5xl font-bold'>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-colorFrom to-colorTo'>
              Front-End Developer
            </h2>
        </motion.div>
        <div className='lg:w-3/4 sm:w-2/3 mx-auto lg:mx-0 tracking-wide'>
            <p>I build visually appealing and user-friendly interfaces. I use HTML, CSS, and JavaScript to create functional and optimal user experience.</p>
            <p className='mt-4'>
                I spend my free time exploring new technologies and experimenting with creative website projects.
            </p>
        </div>
        <div className='mt-6 font-bold'>
            <button onClick={() => setSelectedProject('moreaboutme')}>
                <div className='flex gap-3 items-center justify-center hover:translate-x-5 transition duration-300 ease-in-out'>
                    <p>MORE ABOUT ME</p>
                    <FaAngleRight className='w-5 h-5'/>
                </div>
            </button>
        </div>
    </motion.div>
  )
}

export default AboutMe
