import './AboutCard.css'
import { AboutCardItem } from './AboutCardItem'

export const AboutCard = ({ title, content, className }) => {
return (
    <div className={`aboutCard ${className}`}>
            <h3>{title}</h3>
            {
                    <AboutCardItem content={content} />  
            }
    </div>
)
}
