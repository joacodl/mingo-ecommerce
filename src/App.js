import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Homescreen from "./components/homescreen/Homescreen";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Homescreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
