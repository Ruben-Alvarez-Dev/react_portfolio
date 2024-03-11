import './IconsBar.css'
import mail from './icons/mail.svg';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import telegram from './icons/telegram.svg';

export const IconsBar = () => {
  return (
    <div className="icons__bar">
        <a href='mailto:info@rubenalvarez.dev'>
          <img className="icon" src={mail} />
        </a>
        <a href='https://github.com/Ruben-Alvarez-Dev' target="_blank">
          <img className="icon" src={github} />
        </a>
        <a href='https://www.linkedin.com/in/ruben-alvarez-dev/' target="_blank">
          <img className="icon" src={linkedin} />
        </a>
        <a href="https://t.me/ralvarez82" target="_blank">
          <img className="icon" src={telegram} />
        </a>
    </div>
  )
}
