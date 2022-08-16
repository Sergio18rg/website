import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import { navLinks } from './data/Navbar.data';

function App() {
  return (
  <Navbar links={navLinks} title={'Sergio Riera'}/>
  );
}

export default App;
