import React from 'react'
import {  Route, Routes } from 'react-router-dom' 
import Navbar from './concepts/Navbar'
import Firebase from './concepts/Firebase'
import ApiGet from './concepts/ApiGet'
import Home from './concepts/Home'
import Calculator from './concepts/Calculator'

const App = () => {
  return (
    <div>
      
      <Navbar/>
     <Routes>
     <Route path='/'  element={<Home/>}/>
        <Route path='/firebase'  element={<Firebase/>}/>
        <Route path='/apiget'  element={<ApiGet/>}/>
        <Route path='/calculator/:name'  element={<Calculator/>}/>
      </Routes>
      
     
    </div>
  )
}

export default App
