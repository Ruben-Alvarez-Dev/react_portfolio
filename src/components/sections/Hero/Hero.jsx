import './Hero.css';
import { heroData } from './heroData';
import { Card } from '../../Card/Card';

export const Hero = () => {
  return (
    <>
    <Card
      as={"section"}
      id='hero'
      styles={'hero neo-5-out column'}
      content={
        <Card 
          as={"article"}
          type='panel'
          width=''
          styles={'neo-5-out column'}
          content={heroData}
        />
      }
    />
    </>
  )
}

