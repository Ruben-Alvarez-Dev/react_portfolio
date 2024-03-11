import './PageComponent.css'
import '../../style/global.css'

export const PageComponent = ({name, title, template}) => {
  return (
    <>
    <div className={`${name} page neo-5-out`}>
        
        {(title && <h2>{title}</h2>)}

        {template}

    </div>
    </>
  )
}
