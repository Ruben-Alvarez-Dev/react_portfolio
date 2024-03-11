/* import './AboutCard.css' */
import { AboutCardItem } from './AboutCardItem'

export const AboutCard = ({ title, content }) => {
return (
    <div className="aboutCard">
            <h3>{title}</h3>
            {
                    <AboutCardItem content={content} />  
            }
    </div>
)
}
