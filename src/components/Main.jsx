import React, {useState} from 'react'
import AboutMe from './AboutMe'
import Links from './Links'
import PresenceChild from './PresenceChild'
import { AnimatePresence, motion } from 'framer-motion'
import Project from './Project'
import MainBG from '../assets/images/bg-main.svg'

const Main = ({filteredData, setData, selectedProject}) => {

  const [isVisible, setIsVisible] = useState(true)
  
  const variants = {
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

  const projectComponent = <Project variants={variants} filteredData={filteredData} />
  

  const conditionalRender = () => {
    switch(selectedProject){
      case 'aboutme':
        return <PresenceChild key="aboutme"><AboutMe /></PresenceChild>
      case 'eliteballers':
        return <PresenceChild key="eliteballers">{projectComponent}</PresenceChild>
      case 'gamehub':
        return <PresenceChild key="gamehub">{projectComponent}</PresenceChild>
      case 'animeclouds':
        return <PresenceChild key="animeclouds">{projectComponent}</PresenceChild>
      case 'expenditurex':
        return <PresenceChild key="expenditurex">{projectComponent}</PresenceChild>
      default:
        console.log('switch default');
    }
  }

  

  return (
      <main className='basis-3/4'>
        
          <div className='relative w-full h-[500px] lg:h-full'>
            
              <AnimatePresence>
                {isVisible && conditionalRender()}
              </AnimatePresence>
            
          </div>
       
    </main>
  )
}

export default Main
