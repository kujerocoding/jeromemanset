import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import AboutMe from './AboutMe';

const PresenceChild = ({children}) => {

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };


  return (
    
    <motion.div
    className='absolute w-full h-full flex items-center justify-center' 
    initial="hidden"
    animate="show"
    exit="exit"
    >
        {children}
    </motion.div>
    
  )
}

export default PresenceChild