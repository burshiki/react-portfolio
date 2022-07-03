import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <hr class="m-5"></hr>
      <AboutMe />
      <hr class="m-5"></hr>
      <Services />
      <hr class="m-5"></hr>
      <Footer />
    </>
  );
}

export default App;
