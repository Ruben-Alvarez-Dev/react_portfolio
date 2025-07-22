import { 
  AboutSection, 
  ProjectsSection, 
  SkillsSection, 
  ContactSection 
} from '../sections'
import './Main.css'

function Main() {
  return (
    <main className="main">
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}

export default Main