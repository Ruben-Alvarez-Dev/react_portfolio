import iconCross from '../../assets/nav/cross.svg'
import './NavbarOverlay.css'

export const NavbarOverlay = () => {
  
  const closeOverlay = (e) => {
    console.log('close overlay');
    const target = e.target.parentElement;
    target.style.opacity = 0;
    setTimeout(() => {
      target.style.display = 'none';
    }, 300);
  }

  return (
    <div className="navbar__overlay">
            <img onClick={ closeOverlay } className="navbar__iconCross" src={iconCross}/>
            <ul className="navbar__listMobile">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Skills</a></li>
              <li><a href="#contact">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="../../assets/cv_ruben_2024.pdf" download>Download</a></li>

            </ul>
          </div>
  )
}
