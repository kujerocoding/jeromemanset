import React, {useState} from 'react'
import AboutMe from './AboutMe'
import Links from './Links'
import PresenceChild from './PresenceChild'
import { AnimatePresence, motion } from 'framer-motion'
import Project from './Project'
import MainBG from '../assets/images/bg-main.svg'

const Main = ({filteredData, setData}) => {

  const [isVisible, setIsVisible] = useState(true)
  const [selectedProject, setSelectedProject] = useState('aboutme')

  const handleClick = (e) => {
    const { name } = e.target
    setSelectedProject(() => {
      if(selectedProject !== name) return name
      return 'aboutme'
    })
    setData(prevData => {
          return prevData.map(item => item.name === name ? {...item, isOpen: true} : {...item, isOpen: false})
        }
    )
  }

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
      x: 200,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  return (
      <div className=' h-5/6 md:flex gap-8 overflow-hidden'>
        <div className='w-11/12 mx-auto relative'>
          <div className='absolute top-0 left-0 w-full'>{/* <img src={MainBG} alt="" /> */}</div>
          <AnimatePresence>
            {isVisible && conditionalRender()}
          </AnimatePresence>
        </div>
        <Links handleClick={handleClick} selectedProject={selectedProject} key="shit"/>
    </div>
  )
}

export default Main
