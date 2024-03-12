import './Aside.css';
import iconCross from '../../assets/navbar/cross.svg'

export const Aside = () => {
  
  const closeOverlay = (e) => {
    
    const target = e.target.parentElement;
    target.style.opacity = 0;
    setTimeout(() => {
      target.style.display = 'none';
      target.style.zIndex = -1;
    }, 300);
  }

  const handleBtn = (e) => {
    const target = document.querySelector('.iconCross');
    target.click();
  }

  return (
    <div className="aside">
            <img onClick={ closeOverlay } className="iconCross" src={iconCross}/>
            <ul className="listMobile">
              <li><a onClick={handleBtn} href="#about-anchor">About</a></li>
              <li><a onClick={handleBtn} href="#skills-anchor">Skills</a></li>
              <li><a onClick={handleBtn} href="#projects-anchor">Projects</a></li>
              <li><a onClick={handleBtn} href="#contact-anchor">Contact</a></li>
              

            </ul>
          </div>
  )
}
