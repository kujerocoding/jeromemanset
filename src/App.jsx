import React, {useState} from 'react'
import NavBar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import ProjectData from './ProjectData';


const App = () => {

  const [data, setData] = useState(ProjectData)
  const filteredData = data.filter(item => item.isOpen === true)
  //console.log(filteredData);

  

  return (
    
      <div className='flex flex-col h-screen'>
        <NavBar />
        <Main setData={setData} filteredData={filteredData}/>
        <Footer />
      </div>
  )
}

export default App
