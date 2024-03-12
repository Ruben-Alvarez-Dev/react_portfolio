import './ProjectCard.css';
import { Slider } from '../../components/Slider/Slider';
import ico_link from './link.svg';
import ico_github from './github.svg';


export const ProjectCard = ({name, content}) => {
  
  const {title, description, tools, images, website, github} = content

  return (
    
      <div className={`projectCard ${name} neo-5-out`}>
        
        <div className="image">
          <Slider images={images}/>
        </div>

        <div className="info">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="tools">
            {tools.map((item, index) => (
              <span className="neo-5-out" key={index}>{item}</span>
            ))}
          </div>
          <div className="links">
            <a href={website} target="_blank" rel="noreferrer">
              <img className="icon" src={ico_link} alt="link"/>
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <img className="icon" src={ico_github} alt="link"/>
            </a>
          </div>
        </div>
      </div>  
    
    
  )
}