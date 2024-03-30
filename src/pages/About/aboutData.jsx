
import { AboutCard } from "./AboutCard";

export const training = [
        {
          title: "Ciclo Formativo de Grado Superior, Ilerna, Lleida", 
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
          title: "Ciclo Formativo de Grado Superior, Vesta Formación, Murcia",
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
export const background = [
  {
    title: "",
    content: "With years of experience in customer-facing hospitality roles and an advanced degree in hospitality management, I've led diverse teams of up to 60 people and developed strong soft skills in communication, leadership, and project management. In 2019, I turned my passion for programming into a professional pursuit, earning a certification in Web Application Development and completing the Neoland Bootcamp. My unique background in hospitality and web development has given me a versatile skill set, and I'm excited to bring these qualities to new challenges in the tech industry."
  },
];
export const languages = [
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
{/* <div className="about__container">
      <AboutCard
        className="background"
        title="Background"
        content={background}
      />
      <AboutCard
        className="languages"
        title="Idiomas"
        content={languages}
      />
      <AboutCard
        className="training"
        title="Formación"
        content={training}
      />
      </div> */}
export const aboutTemplate = (
  <>
    <AboutCard title="background" content={background} />
    <AboutCard title="training" content={training} />
  </>
)
