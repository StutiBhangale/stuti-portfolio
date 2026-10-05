import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ProjectsInfo from './pages/Projects/ProjectsInfo';
import ProjectDetail from './pages/ProjectDetails/ProjectDetail';
import Skills from './pages/Skills/Skills';
import Experience from './pages/Experience/Experience';
import ContactMe from './pages/Contact/ContactMe';
import Achievements from './pages/Achievement/Achievements';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='' element={<>
            <Home />
            <ProjectsInfo />
            <Experience />
            <Skills />
            <Achievements />
            <ContactMe />
          </>} />
          <Route path='/projects/:slug' element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default App;
