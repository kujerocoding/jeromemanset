import React, {useState} from 'react'
import Main from './components/Main'
import ProjectData from './ProjectData';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

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
    
      <div className='h-full max-w-7xl mx-auto'>
        <Header />
        <main className='lg:flex lg:h-5/6'>
          <Main 
          setData={setData} 
          filteredData={filteredData} 
          selectedProject={selectedProject} 
          setSelectedProject={setSelectedProject}/>
          <ProjectList
          handleClick={handleClick} 
          selectedProject={selectedProject} 
          key="shit"/>
        </main>
      </div>
  )
}

export default App
