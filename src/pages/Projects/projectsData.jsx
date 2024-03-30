import './ProjectCard.css';
import { ProjectCard } from './ProjectCard'
import image_1 from '../../assets/projects/trello-clone.gif';
import image_2 from '../../assets/projects/image_2.jpg';
import image_3 from '../../assets/projects/image_3.jpg';

const project_1 = {
  title: "Trello Clone App",
  description: "To do list app with drag and drop functionality, like Trello app. It uses LocalStorage to save the data, was made with React JS and Beautiful DnD, and also built with hooks as useState, useEffect and useContext.",
  tools: [
    "Html",
    "Css",
    "Javascript",
    "React JS",
    "LocalStorage",
    "Beautiful DnD",
    "Git",
  ],
  images: image_1,
  website: 'https://trello.rubenalvarez.dev',
  github: 'https://github.com/Ruben-Alvarez-Dev/project_trello-clon'
};
const project_2 = { 
  title: "Trailer Movie App",
  description: "Pending to upload...",
  tools: [
    "Html",
    "Css",
    "Javascript",
    "Typescript",
    "React JS",
    "React Router",
    "Styled Components",
    "Fetch API",
    "Git",
    ],
  images: image_2,
  website: 'https://www.google.com',
  github: 'https://www.github.com'
};
const project_3 = { 
  title: "Crud PHP & SQL App",
  description: "In progress...",
  tools: [
    "Html",
    "Css",
    "Javascript",
    "PHP",
    "MySQL",
    "Git",
    ],
  images: image_3,
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