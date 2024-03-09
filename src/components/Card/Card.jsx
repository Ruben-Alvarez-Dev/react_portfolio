
import './Card.css';

export const Card = ({
    as: Component = "div",
    width="100%",
    height="100%",
    backgroundColor="",
    title="", 
    styles="default",
    content=<div>Card Content...</div>
}) => {

    return (
    <Component className={`card ${styles}`} style={{ width, height, backgroundColor }}>
        <h2 className="card__title">
            {title}
        </h2>
        <div className="card__content">
            {content}
        </div>
    </Component>
)
}

