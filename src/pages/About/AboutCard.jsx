import './AboutCard.css'
import { AboutCardItem } from './AboutCardItem'


export const AboutCard = ({ title, content }) => {
return (
    <div className={`aboutCard ${title} neo-5-out`}>
            <h3>{title}</h3>

            {
                    <AboutCardItem content={content} />  
            }
    </div>
)
}
