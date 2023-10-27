import React from 'react'
import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Movie from './pages/Movie';
import TvShow from './pages/Tv-Show';
import WebSeries from './pages/Web-Series';
const App = () => {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/Movie'  element={<Movie/>}/>
      <Route path='/TvShow'  element={<TvShow/>}/>
      <Route path='/webseries'  element={<WebSeries/>}/>
      
    </Routes>
   </>
  )
}

export default App