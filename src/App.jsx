import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Route and Routes
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Stock from './components/Stock';
import Dashboard from './components/Dashboard';
import Nav from './component/Nav';


function App() {
 

  return (
    
    <div className='App'>
    <Nav />
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/stocks/:symbol/' element={<Stock/>} /> 
    <Route path='/stocks' element={<Dashboard/>} />

    </Routes>

     </div>
    
  )
}

export default App
