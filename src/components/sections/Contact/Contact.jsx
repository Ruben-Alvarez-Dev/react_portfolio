import { Card } from '../../Card/Card';
import './Contact.css';

export const Contact = () => {
  
  const content =
    <>
      <p>
        Loren ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.

        Duis vulputate commodo lectus, ac blandit elit tincidunt id.
        Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim
      </p>
    </>
  
  return (
      <div className="section contact">
        <h2>Contact</h2>
        <div className="contact__container">
          <Card
            as={"article"}
            width={1000}
            height={600}
            backgroundColor={""}
            styles={'neo-5 column'}
            title={"Título mio"}
            content={content}
          />
        </div>
      </div>
    )
  }
