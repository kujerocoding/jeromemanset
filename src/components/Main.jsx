import React, {useState} from 'react'
import AboutMe from './AboutMe'
import Links from './Links'
import PresenceChild from './PresenceChild'
import { AnimatePresence, motion } from 'framer-motion'
import Project from './Project'
import MainBG from '../assets/images/bg-main.svg'

const Main = ({filteredData, setData, selectedProject}) => {

  const [isVisible, setIsVisible] = useState(true)
  

  

  const conditionalRender = () => {
    switch(selectedProject){
      case 'aboutme':
        return <PresenceChild key="aboutme"><AboutMe item={item} /></PresenceChild>
      case 'eliteballers':
        return <PresenceChild key="eliteballers"><Project item={item} filteredData={filteredData} /></PresenceChild>
      case 'gamehub':
        return <PresenceChild key="gamehub"><Project item={item} filteredData={filteredData} /></PresenceChild>
      case 'animeclouds':
        return <PresenceChild key="animeclouds"><Project item={item} filteredData={filteredData} /></PresenceChild>
      case 'expenditurex':
        return <PresenceChild key="expenditurex"><Project item={item} filteredData={filteredData} /></PresenceChild>
      default:
        console.log('switch default');
    }
  }

  const item = {
    hidden: { opacity: 0, x: 200 },
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
      x: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  return (
      <main className='bg-white basis-3/4'>
        
          <div className='relative w-full h-[500px]'>
            <div className='absolute w-full h-full bg-green-500 flex items-center justify-center'>
              <AnimatePresence>
                {isVisible && conditionalRender()}
              </AnimatePresence>
            </div>
          </div>
       
    </main>
  )
}

export default Main
