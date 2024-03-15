
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavbarTop from './components/NavbarTop'
import Alldata from './components/Alldata'
import Createdata from './components/Createdata'
import Edit from './Edit'

function App() {
  

  return (
    <>
        <NavbarTop/>
        <Routes>
          <Route path='/' element={<Alldata/>}/>
          <Route path='/createdata' element={<Createdata/>}/>
          <Route path='/user/:id' element={<Edit/>}/>
        </Routes>
    </>
  )
}

export default App
