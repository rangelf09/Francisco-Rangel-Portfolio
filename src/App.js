import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from './components/pages/Portfolio';



function App() {
    return (
        <Router>
        <div>
            <Navbar/>
             <Route exact path="/" component={Home}/>
            <Route path="/aboutme" component={About}/>
            <Route path="/contact" component={Contact}/> 
            <Route exact path="/portfolio" component={Portfolio}/>
            <Footer/>
        </div>
        </Router>
    );
}
export default App;