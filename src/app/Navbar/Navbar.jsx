import './Navbar.css';
import iconHamburger from '../../assets/navbar/hamburger.svg';
/* 
import { NavbarOverlay } from '../../components/Navbar/NavbarOverlay'
import { NavbarButton } from '../../components/Navbar/NavbarButton' */

export const Navbar = () => {
  
  const handleToggle = (e) => {
    const overlay = document.querySelector('.navbar__overlay');
    overlay.style.display = 'flex';
    setTimeout(() => {
      overlay.style.opacity = 1;
    }, 1);
  }

  return (

      
      <nav className="navbar">
        <h2><a href="#hero-anchor">Dev Portfolio</a></h2>
        <ul>
          <li><h3><a href="#about-anchor">About</a></h3></li>
          <li><h3><a href="#skills-anchor">Skills</a></h3></li>
          <li><h3><a href="#projects-anchor">Projects</a></h3></li>
          <li><h3><a href="#contact-anchor">Contact</a></h3></li>
        </ul>
        <img src={iconHamburger} />

        {/* <h2></h2>
          <div className="navbar__textMenu">
            <ul className="navbar__list">
                
                <li>
                  <NavbarButton
                      href="../../assets/cv_ruben_2024.pdf"
                      label="Download"
                  />
                </li>
                
            </ul>
          </div>
        
        <img
            onClick={handleToggle}     className="navbar__iconHamburger"
            src={iconHamburger}
        />
        <NavbarOverlay /> */}
      </nav>


  )
}
