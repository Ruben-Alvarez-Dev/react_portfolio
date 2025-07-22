import Container from '../Container'
import './Section.css'

function Section({ 
  id, 
  title, 
  children, 
  className = '',
  containerClassName = '' 
}) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <Container className={containerClassName}>
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </Container>
    </section>
  )
}

export default Section