import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Services from "./pages/services";
import Testimonials from "./pages/testimonials";
import Booking from "./pages/booking";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App
