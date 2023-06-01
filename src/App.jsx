import React, {useState} from 'react'
import NavBar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import ProjectData from './ProjectData';
import Links from './components/Links';


const App = () => {

  const [data, setData] = useState(ProjectData)
  const filteredData = data.filter(item => item.isOpen === true)
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

  return (
    
      <div className='h-full'>
        <NavBar />
        <div className='lg:flex lg:h-5/6'>
          <Main 
          setData={setData} 
          filteredData={filteredData} 
          selectedProject={selectedProject} 
          setSelectedProject={setSelectedProject}/>
          <Links 
          handleClick={handleClick} 
          selectedProject={selectedProject} 
          key="shit"/>
        </div>
      </div>
  )
}

export default App
