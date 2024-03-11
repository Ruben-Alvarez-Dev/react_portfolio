import mail from '../../IconsBar/icons/mail.svg';
import './contactData.css';
import { IconsBar } from "../../components/IconsBar/IconsBar";

export const contactTemplate = (
  
    <>

<Card
          as='section'
          styles='contact neo-5-out column'
          title='Contact'
          content={
            
              <>
                
                    <Card
                      as="article"
                      type="panel"
                      width="65%"
                      minHeight="100%"
                      styles='neo-5-out column icons'
                      title=""
                      content={contactData}
                    />
                

                    <Card
                      as="article"
                      type="panel"
                      width="65%"
                      minHeight="100%"
                      styles='neo-5-out column'
                      title="Say Hello!"
                      content={
                        <ContactForm />
                      }
                    />

              </>
          }
        />

    </>
)

export const contactData =
  <>
    <div className="contactData__container">
      
        <a href="mailto:info@rubenalvarez.dev">
        <img src={mail} alt="mail" style={{ width: "50px", height: "40px" }} />
          <h3>
            info@rubenalvarez.dev
          </h3>
        </a>
      
    </div>

    <IconsBar />
    <br />
  </>
