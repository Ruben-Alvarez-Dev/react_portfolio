
import './Card.css';

export const Card = ({
    as: Component = "div",
    type="page",
    id="",
    width="",
    minHeight="",
    margin="",
    padding="",
    gap="",
    backgroundColor="",
    title="", 
    styles="default",
    content=<div>Card Content...</div>
}) => {

    return (
    <Component 
        className={`card ${styles} ${type} ${id}`} 
        style={{ width, minHeight, margin, padding, gap, backgroundColor }}
    >
        <div className={`${type}__container ${id}__container container`}>
            <h2 className={`${type}__title ${id}__title title`}>{title}</h2>
            <div className={`${type}__content ${id}__title content`}>{content}</div>
        </div>
    
    </Component>
)
}