import './About.css';
/* import './aboutData.jsx'; */
import { CardComponent } from '../../components/CardComponent/CardComponent';
/* import { AboutCard } from "./AboutCard"
 */
import { aboutTemplate } from './AboutData';

export const About = () => {
  
  return (
    <>
      <CardComponent name="about" title="About me" template={aboutTemplate}/>
    </>
  );
}