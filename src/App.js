import React from 'react'
import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './component/Navbar/Navbar';
import Home from './pages/Home/Home';
import Movie from "./pages/Movies/index"
import TvShow from './pages/Tv-Show';
import WebSeries from './pages/Web-Series';
import Footer from './component/Footer';
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
    <Footer/>
   </>
  )
}

export default App
