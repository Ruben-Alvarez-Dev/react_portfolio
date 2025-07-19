import { ThemeProvider } from './contexts/ThemeProvider';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import './main.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </Main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;