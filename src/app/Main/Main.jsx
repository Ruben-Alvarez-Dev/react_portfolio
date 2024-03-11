import './Main.css'
import { PageComponent } from '../../components/PageComponent/PageComponent';

import { Hero } from '../../pages/Hero/Hero';
import { About } from "../../pages/About/About"
import { Skills } from "../../pages/Skills/Skills"
import { Projects } from "../../pages/Projects/Projects"
import { Contact } from "../../pages/Contact/Contact"

export const Main = () => {
  
  return (
    <main className="main">
           
      <div id="hero-anchor"></div>
          <PageComponent name="hero" template={<Hero /> }/>      
      
      <div id="hero-anchor"></div>
          <PageComponent name="about" template={<About /> }/>
      
      <div id="hero-anchor"></div>
          <PageComponent name="skills" template={<Skills /> }/>

      <div id="hero-anchor"></div>
          <PageComponent name="projects" template={<Projects /> }/>

      <div id="hero-anchor"></div>
          <PageComponent name="contact" template={<Contact /> }/>

    </main>
  );
};
