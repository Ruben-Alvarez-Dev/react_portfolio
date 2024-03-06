import './Navbar.css'
import iconHamburger from '../../assets/nav/hamburger.svg'
import { NavbarOverlay } from './NavbarOverlay'
import { NavbarButton } from './NavbarButton'

export const Navbar = () => {
  
  const handleToggle = (e) => {
    const overlay = document.querySelector('.navbar__overlay');
    overlay.style.display = 'flex';
    setTimeout(() => {
      overlay.style.opacity = 1;
    }, 1);
  }

  return (

      <div className="navbar__container">
      <nav className="navbar">
        <h2><a href="#hero-anchor" className='navbar__title'>Dev Portfolio</a></h2>
          <div className="navbar__textMenu">
            <ul className="navbar__list">
                <li><a href="#about-anchor">About</a></li>
                <li><a href="#skills-anchor">Skills</a></li>
                <li><a href="#projects-anchor">Projects</a></li>
                <li><a href="#contact-anchor">Contact</a></li>
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
        <NavbarOverlay />
      </nav>
      </div>

  )
}
