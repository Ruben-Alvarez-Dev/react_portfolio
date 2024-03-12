import './ProjectCard.css';
import { ProjectCard } from './ProjectCard'
import image_1 from '../../assets/projects/pic1.jpg';
import image_2 from '../../assets/projects/pic2.jpg';
import image_3 from '../../assets/projects/pic3.jpg';
import image_4 from '../../assets/projects/pic4.jpg';
import image_5 from '../../assets/projects/pic5.jpg';
import image_6 from '../../assets/projects/pic6.jpg';
import image_7 from '../../assets/projects/pic7.jpg';
import image_8 from '../../assets/projects/pic8.jpg';
import image_9 from '../../assets/projects/pic9.jpg';

const project_1 = {
  title: "Título 2",
  description: "Loren ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
  tools: [
    "Git",
    "Postman",
    "Docker",
    "AWS",
    "Firebase",
    "Postman",
    "Docker",
    "AWS"
  ],
  images: [image_1, image_2, image_3],
  website: 'https://www.google.com',
  github: 'https://www.github.com'
};
const project_2 = { 
  title: "Título 2",
  description: "Loren ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
  tools: [
    "Git",
    "Postman",
    "Docker",
    "AWS",
    "Firebase",
    "Git",
    "Postman",
    "Docker",
    "AWS"
    ],
  images: [image_4, image_5, image_6],
  website: 'https://www.google.com',
  github: 'https://www.github.com'
};
const project_3 = { 
  title: "Título 3",
  description: "Loren ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
  tools: [
    "Git",
    "Postman",
    "Docker",
    "AWS",
    "Firebase",
    "Firebase",
    "Firebase",
    "Firebase",
    "Firebase",
    "Firebase"
    ],
  images: [image_7, image_8, image_9],
  website: 'https://www.google.com',
  github: 'https://www.github.com'
}

export const projectsTemplate = (
    
        <>
          <ProjectCard name="uno" content={project_1}/>
          <ProjectCard name="dos" content={project_2}/>
          <ProjectCard name="tres" content={project_3}/>
        </>


)