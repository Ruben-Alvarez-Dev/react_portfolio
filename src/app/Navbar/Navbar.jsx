import './Navbar.css';
import iconHamburger from '../../assets/navbar/hamburger.svg';
import { DownloadBtn } from './DownloadBtn';
export const Navbar = () => {
  
  const handleToggle = (e) => {
    const aside = document.querySelector('.aside');
    aside.style.display = 'flex';
    setTimeout(() => {
      aside.style.zIndex = 100;
      aside.style.opacity = 1;
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
        <DownloadBtn
            href="../../assets/cv_ruben_2024.pdf"
            label="Download CV"
         />
        <img onClick={handleToggle} src={iconHamburger} />

      
      </nav>


  )
}
