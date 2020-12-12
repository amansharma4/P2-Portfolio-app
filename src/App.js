import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import Footer from "./pages/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <section className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/about" component={About} />
          <Footer path="/footer" component={Footer} />
        </section>
      </BrowserRouter>
    </div>
  );
};
library.add(fab);
export default App;
