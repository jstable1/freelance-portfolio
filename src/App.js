import { React } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {;

  return (
    <div>
        <Header/>
        <AboutMe/>
        <Portfolio/>
        <Contact/>
        <Resume/>
        <Footer/>
    </div>
  );
}

export default App;