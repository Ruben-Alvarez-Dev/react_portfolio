import me from '../../../assets/hero/me.jpeg';
import github from '../../../assets/hero/github.svg';
import linkedin from '../../../assets/hero/linkedin.svg';
import whatsapp from '../../../assets/hero/whatsapp.svg';

export const heroData = 
    <>
        <div className="card__content">
            <div className="hero__panel left">
                <h2>Hi, I´m Rubén,</h2>
                <h3>fullstack developer,</h3>
                <p>based in Sevilla, and passionate about technology, logic and problem solving.
                </p>
        
                <div className="hero__icons">
                    <img className="icon" src={github} />
                    <img className="icon" src={linkedin} />
                    <img className="icon" src={whatsapp} />
                </div>
            </div>  
        
            <div className="hero__panel right">
                <img className="me" src={me} alt="Hero Image" />
            </div>
        </div>
    </>