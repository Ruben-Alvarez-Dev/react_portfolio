import React, { useState, useEffect } from 'react';
/* import './ProjectCard.css'; */
import pic1 from '../../../assets/projects/pic1.jpg';
import pic2 from '../../../assets/projects/pic2.jpg';
import pic3 from '../../../assets/projects/pic3.jpg';


export const ProjectCard = () => {
  
  const [position, setPosition] = useState(1)
  
  useEffect(() => {

    switch(position){
      case 1:
        document.querySelector('.projectCard__display-canvas').style.transform = "translateX(0)";
        break;
      case 2:
        document.querySelector('.projectCard__display-canvas').style.transform = "translateX(calc(-100% /3)";
        break;
      case 3:
      document.querySelector('.projectCard__display-canvas').style.transform = "translateX(calc(-200% /3)";
        break;
      default:
        document.querySelector('.projectCard__display-canvas').style.transform = "translateX(0)";
    }
    
  }, [position])
  
  
  const handleLeft = () => {
    switch(position){
      case 1:
        setPosition(3);  
        break;
      case 2:
        setPosition(1);
        break;
      case 3:
        setPosition(2);
        break;
      default:
        setPosition(1);
    }
  };
  const handleRight = () => {
    switch(position){
      case 1:
        setPosition(2);
        break;
      case 2:
        setPosition(3);
        break;
      case 3:
        setPosition(1);
        break;
      default:
        setPosition(1);
    }
  }


  return (
    <div className="projectCard neo-5-out">
      
        <div className="projectCard__display">
          <div className="projectCard__display-canvas">
            <img src={pic1} alt="Project" />
            <img src={pic2} alt="Project" />
            <img src={pic3} alt="Project" />
          </div>
        </div>
        <div className="projectCard__footer">
          <div className="project__footer-container"></div>
        </div>
        
        <div className="projectCard__overlay">
          <div className="projectCard__overlay-emptyTop">
            <br/>
          </div>
          <div className="projectCard__overlay-emptyTop">
            <br/>
          </div>
          <div className="projectCard__overlay-arrows">
            <span onClick={handleLeft}>{"<"}</span>
            <span onClick={handleRight}>{">"}</span>
          </div>
          
          <h3>Project Title</h3>
          <p>Project Description</p>
        </div>

        
        
      </div>
    
  );
}
