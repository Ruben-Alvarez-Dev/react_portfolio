import './CardComponent.css';
import '../../style/global.css'

export const CardComponent = ({name, title, template}) => {
  return (
    <>
        {(title && <h2>{title}</h2>)}
        <div className={`${name} card neo-5-out`}>
            {template}
        </div>

    </>


  )
}
