import { Card } from '../../Card/Card';
import './About.css';
import { AboutCard } from "./AboutCard"
import { background, training } from './aboutData';

export const About = () => {
  

  return (
    <>
      <Card 
        as='section'
        id="about"
        type='page'
        title='About'
        styles='about neo-5-out column'
        content={
          <>
            <div className="about__panels">
            <Card 
                as='article'
                type='panel'
                styles='left neo-5-out column'
                content={
                    <>
                      <AboutCard 
                        title="Background"
                        content={background}
                      />
                    </>
                  }
              />
              <Card 
                as='article'
                type='panel'
                styles='right neo-5-out column'
                content={
                    <>
                      <AboutCard 
                        title="Training"
                        content={training}
                      />
                    </>
                }
              />
              
            </div>
          </>
        }
      />
    </>
  );
}