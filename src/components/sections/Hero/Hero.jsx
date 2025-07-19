import Button from '../../ui/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Hola, soy <span className="hero__name">Rubén Álvarez</span>
          </h1>
          <h2 className="hero__subtitle">
            Desarrollador Full Stack
          </h2>
          <p className="hero__description">
            Apasionado por crear experiencias web excepcionales. 
            Especializado en React, Node.js y tecnologías modernas de desarrollo.
          </p>
          <div className="hero__actions">
            <Button variant="primary" size="large">
              Ver Proyectos
            </Button>
            <Button variant="outline" size="large">
              Contactar
            </Button>
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__avatar">
            <span className="hero__avatar-placeholder">RA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;