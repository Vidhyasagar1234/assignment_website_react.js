import React from "react"
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import "./App.css"
import Navbar from "./Components/Navbar"
import About from "./Pages/About"
import Blogs from "./Pages/Blogs"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import SignUp from "./Pages/SignUp"
import Notfound from "./Pages/Notfound"
import Home from "./Pages/Home"
import Footbar from "./Components/Footbar"
import Thankyou from "./Pages/Thankyou"

function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/blogs' element = {<Blogs/>}/>
        <Route path='/services' element = {<Services/>}/>
        <Route path='/signup' element = {<SignUp/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path="/thankyou" element={<Thankyou/>}/>
        <Route path="*" element={<Notfound/>} />
      </Routes>
      <Footbar />
    </Router>
  )
}

export default App