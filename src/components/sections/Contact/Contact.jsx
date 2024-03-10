import { Card } from '../../Card/Card';
import './Contact.css';
import { ContactForm } from './ContactForm.jsx';
import { contactData } from './contactData.jsx';

export const Contact = () => {
  
    return (
    
      <Card
        as='section'
        styles='contact neo-5-out column'
        title='Contact'
        content={
        
          <Card
            as="article"
            type="panel"
            width="65%"
            minHeight="100%"
            styles='neo-5-out column'
            title="Contact Me"
            content={
              <ContactForm />
            }
          />
      
        }
      />
      
    )
  }

