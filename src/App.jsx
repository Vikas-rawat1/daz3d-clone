import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./CommonFiles/Footer";
import Navigation from "./CommonFiles/Navigation";
import Shop from "./Pages/Shop";
import HeroSection from "./Home/HeroSection";
import Software from "./Pages/Software";

function App() {
  return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="" element={<HeroSection />} />
          <Route path="" element={<Navigation />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/software" element={<Software />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
