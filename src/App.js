import { React } from 'react';
import Header from './components/Header';
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';

const App = () => {;

  return (
    <div>
        <Header/>
        <SplashPage/>
        <AboutMe/>
        <Portfolio/>
        <Footer/>
    </div>
  );
}

export default App;