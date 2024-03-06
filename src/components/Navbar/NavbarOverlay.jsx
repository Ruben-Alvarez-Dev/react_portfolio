import iconCross from '../../assets/nav/cross.svg'
import './NavbarOverlay.css'

export const NavbarOverlay = () => {
  
  const closeOverlay = (e) => {
    
        const target = e.target.parentElement;
    target.style.opacity = 0;
    setTimeout(() => {
      target.style.display = 'none';
    }, 300);
  }

  const handleBtn = (e) => {
    const target = document.querySelector('.navbar__iconCross');
    target.click();
  }

  return (
    <div className="navbar__overlay">
            <img onClick={ closeOverlay } className="navbar__iconCross" src={iconCross}/>
            <ul className="navbar__listMobile">
              <li><a onClick={handleBtn} href="#about-anchor">About</a></li>
              <li><a onClick={handleBtn} href="#skills-anchor">Skills</a></li>
              <li><a onClick={handleBtn} href="#projects-anchor">Projects</a></li>
              <li><a onClick={handleBtn} href="#contact-anchor">Contact</a></li>
              <li><a onClick={handleBtn} href="../../assets/cv_ruben_2024.pdf" download>Download</a></li>

            </ul>
          </div>
  )
}
