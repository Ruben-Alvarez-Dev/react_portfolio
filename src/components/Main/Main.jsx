import './Main.css'
import { About } from "../sections/About/About"
import { Skills } from "../sections/Skills/Skills"
import { Projects } from "../sections/Projects/Projects"
import { Contact } from "../sections/Contact/Contact"
import { Hero } from '../sections/Hero/Hero'


export const Main = () => {
  return (
    <main className="main">
      <div id="hero-anchor"></div>
      <Hero />
      <div id="about-anchor"></div>
      <About />
      <div id="skills-anchor"></div>
      <Skills />
      <div id="projects-anchor"></div>
      <Projects />
      <div id="contact-anchor"></div>
      <Contact />
    </main>
  )
}
