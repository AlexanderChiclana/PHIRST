import React from 'react';

import './App.scss';
import Homepage from './Homepage.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js'
import Footer from './Footer.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      < Homepage />
      <Footer />
    </div>
  );
}

export default App;
