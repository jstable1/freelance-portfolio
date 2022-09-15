import { React, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
    const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume/>;
    }
    if (currentPage === 'About') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* We are passing the currentPage from state and the function to update it */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
        <Footer></Footer>
    </div>
  );
}

export default App;