import React from 'react'
import Styles from './App.module.css';
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About.jsx"
import Destination from "./Components/Destination";
import Tourinsights from "./Components/Tourinsights";
import Treckking from "./Components/Treckking";
import {Link, Route, Routes} from "react-router-dom"
import SplashScreen from './Components/SplashScreen.jsx';

const App = () => {
  return (
    <div className={Styles.container}>
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/destination' element = {<Destination/>}/>
            <Route path='/tourinsights' element = {<Tourinsights/>}/>
            <Route path='/treckking' element = {<Treckking/>}/>

        </Routes>


    </div>
  )
}

export default App