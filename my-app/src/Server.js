import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import About from "./About";

export const Server = () => {
  return (
    <div>
        <Router>
        <NavigationBar/>
        <Routes>
          <Route path='/about' element={<About />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  )
}
