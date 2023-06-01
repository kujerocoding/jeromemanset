import React, {useState} from 'react'
import AboutMe from './AboutMe'
import Links from './Links'
import PresenceChild from './PresenceChild'
import { AnimatePresence, motion } from 'framer-motion'
import Project from './Project'
import MainBG from '../assets/images/bg-main.svg'
import MoreAboutMe from './MoreAboutMe'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Main = ({filteredData, setSelectedProject, selectedProject}) => {

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
        return <PresenceChild key="aboutme"><AboutMe setSelectedProject={setSelectedProject} /></PresenceChild>
      case 'moreaboutme':
        return <PresenceChild key="moreaboutme"><MoreAboutMe setSelectedProject={setSelectedProject} /></PresenceChild>
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
      <main className='relative basis-3/4'>
        
          <div className='relative w-full h-[500px] lg:h-full'>
            
              <AnimatePresence>
                {isVisible && conditionalRender()}
              </AnimatePresence>
            
          </div>
          {selectedProject === 'aboutme' ? 
            <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            
            className='hidden lg:block bg-border w-fit absolute top-1/2 left-0 -translate-y-1/2'>
              <a href="https://www.linkedin.com/in/jeromemanset22" target="_blank"><AiFillLinkedin className='icon' /></a>
              <a href="https://github.com/kujerocoding" target="_blank"><AiFillGithub className='icon' /></a>
            </motion.div>
            : null}
    </main>
  )
}

export default Main
