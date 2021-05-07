import React from "react";
import About from "./About";
import Contact from "./ContactSection";
import CopyRights from "./CopyRight";
import Footer from "./Footer";
import Intro from "./Intro";
import NavigationBar from "./NavigationBar";
import Portfolio from "./Portfolio";
import styles from "./styles.css";

const App = () => (
  <div>
    <NavigationBar />
    <Intro />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
    <CopyRights />
  </div>
);

export default App;
