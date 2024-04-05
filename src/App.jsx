import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
// import Shop from "./Pages/Shop";
import HeroSection from "./components/Home/HeroSection";
import Software from "./Pages/Software";
import Footer from "./components/Footer";
import Community from "./Pages/Community";

function App() {
  return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="" element={<HeroSection />} />
          <Route path="" element={<Navigation />} />
          {/* <Route path="/Shop" element={<Shop />} /> */}
          <Route path="/software" element={<Software />} />
          <Route path="/community"  element={<Community/>}/>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
