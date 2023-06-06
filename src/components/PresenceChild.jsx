import { motion } from 'framer-motion';
import React from 'react'

const PresenceChild = ({children}) => {

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