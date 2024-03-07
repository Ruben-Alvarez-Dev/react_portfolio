import './AboutCardItem.css';

export const AboutCardItem = ({ content }) => {
  return (
    <div className="aboutCardItem">
        {
            content.map((item, index) => (
              <div className="aboutCardItem__element" key={index}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))
        }

    </div>
  )
}
