import './About.css';
import { AboutCard } from "./AboutCard"

export const About = () => {
  
  const training = [
    {
      title: "FP Superior, Ilerna, Lleida", 
      content: "Desarrollo de aplicaciones web",
    },
    {
      title: "Bootcamp, Neoland, Madrid",
      content: "Fullstack Developer",
    },
    {
      title: "Master COFPyDE, Universidad de Murcia",
      content: "Máster de Prosesorado de Formación Profesional",
    },
    {
      title: "FP Superior, Vesta High School, Murcia",
      content: "Dirección de Servicios en Restauración",
    },

    {
      title: "Certificación, Universidad Antonio de Nebrija, Madrid",
      content: "Formador de Formadores",
    },
    {
      title: "Business & Administration, Sounderland College, Liverpool",
      content: "NV Qualification, Level 2",
    }
  ];
  const background = [
    {
      title: "",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
  ];
  const languages = [
    {
      title: "Spanish",
      content: "Native",
    },
    {
      title: "English",
      content: "B2 equivalent",
    },
    {
      title: "Italian",
      content: "A2 equivalent",
    },
    {
      title: "French",
      content: "A1 equivalent",
    },
  ]
  return (
    <section className="section about">
      <AboutCard
        className="background"
        title="Background"
        content={background}
      />
      {/* <AboutCard
        className="languages"
        title="Idiomas"
        content={languages}
      /> */}
      <AboutCard
        className="training"
        title="Formación"
        content={training}
      />
      </section>
  )
}