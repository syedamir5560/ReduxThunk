
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavbarTop from './components/NavbarTop'
import Alldata from './components/Alldata'
import Createdata from './components/Createdata'

function App() {
  

  return (
    <>
        <NavbarTop/>
        <Routes>
          <Route path='/' element={<Alldata/>}/>
          <Route path='/createdata' element={<Createdata/>}/>
        </Routes>
    </>
  )
}

export default App
