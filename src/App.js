import React, { Fragment } from "react";
import GlobalStyles from "./GlobalStyles";
import Nav from "./Components/Nav";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import GitSection from "./Components/GitSection";
import Contact from "./Components/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Nav />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/git" element={<GitSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

