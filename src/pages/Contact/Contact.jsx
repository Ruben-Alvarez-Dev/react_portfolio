import './Contact.css';
import { CardComponent } from '../../components/CardComponent/CardComponent.jsx';
import { contactTemplate } from './contactData.jsx';



export const Contact = () => {
  
    return (
        <>
          <CardComponent
              name="contact" 
              title="Contact me" 
              template={contactTemplate}/>
        </>
      )
  }

