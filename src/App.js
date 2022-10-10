import { React } from 'react';
import Header from './components/Header';
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';

const App = () => {;

  return (
    <div>
        <Header/>
        <SplashPage/>
        <AboutMe/>
        <Portfolio/>
        <Resume/>
        <Footer/>
    </div>
  );
}

export default App;