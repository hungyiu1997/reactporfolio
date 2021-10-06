import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import './App.css';

function App() {
  const pagesArr = [<AboutMe/>, <Projects/>, <Contact/>]
  const [page, setPage] = useState(pagesArr [0]);
  return (
    <div className="App">
      <Header setPage = {setPage} pagesArr = {pagesArr} />
      {page}
      <Footer />
    </div>
  );
}

export default App;

//npm run predeploy and npm run deploy
