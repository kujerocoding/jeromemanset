import { motion } from 'framer-motion'
import React from 'react'


const AboutMe = ({setSelectedProject}) => {

    const headingText = "Hi, I'm Jerome Manset"
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

  return (
    <motion.div 
    variants={variants} 
    className='p-4 lg:p-10 lg:pl-32 flex flex-col text-primary text-center lg:text-left'>

            <div className='text-4xl sm:text-4xl md:text-6xl font-bold'>
                <h1>Hi, I'm Jerome</h1>
            </div>
            <div className='pb-10 text-4xl sm:text-4xl md:text-6xl'>
                <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-colorFrom to-colorTo '>web developer</h2>
            </div>
            <div className='lg:w-3/4'>
                <p>I love  building and maintaining websites. I use HTML, CSS, and JavaScript to create functional and visually appealing web pages. </p>
                <p className='mt-4'>
                I spend my free time exploring new technologies and experimenting with creative website projects.
                </p>
            </div>
            <div className='mt-6 font-bold'>
                <button onClick={() => setSelectedProject('moreaboutme')} >MORE ABOUT ME</button>
            </div>
        
{/*         <motion.div
            className='font-archivo uppercase flex flex-wrap text-3xl sm:text-4xl md:text-6xl'
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
        </motion.div> */}

        {/* <motion.div
            className='font-roboto flex flex-wrap'
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
        </motion.div> */}

 {/*        <motion.div
        className='font-roboto flex flex-wrap w-4/5 text-center'
        initial="hidden"
        animate="visible"
        variants={parentWords}>
            <motion.p
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
            }}
            >{aboutMeText}</motion.p>
        </motion.div> */}

    </motion.div>
  )
}

export default AboutMe
