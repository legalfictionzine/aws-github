import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import Submissions from "./components/Submissions";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container">
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="submissions" element={<Submissions/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;
