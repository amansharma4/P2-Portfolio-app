import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import { BrowserRouter, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {  faCoffee } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <section className='container' >
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />
        </section>
      </BrowserRouter>
    </div>
  );
}
library.add(fab,  faCoffee)
export default App;
