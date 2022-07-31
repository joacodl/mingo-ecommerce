import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Homescreen from "./components/homescreen/Homescreen";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import './App.css'

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navOpeningHandler = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={menuOpen && 'onlyMenu'}>
    {/* // <div className={'onlyMenu'}> */}
      <Router>
        <Header onMenuOpening={navOpeningHandler} isOpen={menuOpen} />
        <Routes>
          <Route exact path='/' element={<Homescreen />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
