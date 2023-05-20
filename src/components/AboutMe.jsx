import { motion } from 'framer-motion'
import React from 'react'


const AboutMe = ({item}) => {

    const headingText = "Hi, I'm Jerome Manset."
    const headingLetters = Array.from(headingText)

    const aboutMeText = "I am a self-taught front-end developer with a background in network engineering. I shifted my career to pursue my passion for web development, and I have been learning and building projects on my own. I am excited to continue growing my skills and contributing to the field. In my free time, I enjoy watching NBA games and playing online games."
    const aboutMeWords = aboutMeText.split(".")

    const parentLetters = {
        hidden:{opacity: 0},
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.02 * i} 
        })
    }
    const parentWords = {
        hidden:{opacity: 0},
        visible: (i = 60) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i} 
        })
    }

    

  return (
    <motion.div variants={item} className='p-10 w-full h-full flex flex-col justify-evenly items-center'>
        
        <div className='w-20 h-20 b-red'>
            <img className='w-full h-full object-contain' src="../src/assets/images/avatar.png" alt="profile picture"/> 
        </div>
        
        <motion.div
            className='b-white flex flex-wrap text-3xl sm:text-4xl md:text-6xl'
            initial="hidden"
            animate="visible"
            variants={parentLetters}
        >
                {headingLetters.map((letter, i) => (
                    <motion.p key={i}
                   
                    variants={{
                        hidden:{
                            opacity: 0,
                            x: i % 2 === 0 ? -50 : 50,
                            y: -50,
                            transition: {
                                type: "spring",
                                damping: 12,
                                stiffness: 100
                            }
                        },
                        visible:{
                            opacity: 1,
                            x: 0,
                            y: 0,
                            transition: {
                                type: "spring",
                                damping: 12,
                                stiffness: 100
                            }
                        }
                    }}
                    >{letter === " " ? "\u00A0" : letter}</motion.p>
                ))}
        </motion.div>

        <motion.div
            className='b-black'
            initial="hidden"
            animate="visible"
            variants={parentWords}
        >
           {aboutMeWords.map((word, i) => (
            <motion.p
                
                key={i}
                variants={{
                 hidden:{
                     opacity: 0,
                     y: 50,
                     transition: {
                         type: "spring",
                         damping: 12,
                         stiffness: 50
                     }
                 },
                 visible:{
                     opacity: 1,
                     y: 0,
                     transition: {
                         type: "spring",
                         damping: 12,
                         stiffness: 50,
                     }
                 }
             }}>{word}</motion.p>
           ))}
        </motion.div>
    </motion.div>
  )
}

export default AboutMe
