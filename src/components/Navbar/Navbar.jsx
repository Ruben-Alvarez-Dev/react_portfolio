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
    <>
      <div className='navbar__container'>
        <div className="navbar">
          <h2 className='navbar__title'>Dev Portfolio</h2>
            <nav className="navbar__textMenu">
              <ul className="navbar__list">
                  <li><a href="#about">About</a></li>
                  <li><a href="#projects">Skills</a></li>
                  <li><a href="#contact">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li>
                    <NavbarButton
                       href="../../assets/cv_ruben_2024.pdf"
                       label="Download"
                    />
                  </li>
                  
              </ul>
            </nav>
          
          <img
              onClick={handleToggle}     className="navbar__iconHamburger"
              src={iconHamburger}
          />
          <NavbarOverlay />
        </div>
      </div>
    </>
  )
}
