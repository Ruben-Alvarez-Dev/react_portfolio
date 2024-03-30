import './App.css'
import '../style/global.css'
import { Navbar } from "./Navbar/Navbar";
import { Main } from "./Main/Main";
import { Aside } from "./Aside/Aside";

import './App.css'

export const App = () => {
  
  return (
    <>
    <div className="app">
      <Navbar />
      <Main />
      <Aside />
    </div>
    
    </>
  )
}

/* const function bloquearRotacion = () => {
  // Opción 1: Usando CSS
  document.body.style.transform = "rotate(0deg)";
  document.body.style.webkitTransform = "rotate(0deg)";

  // Opción 2: Usando JavaScript nativo
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock("portrait");
  } else if (window.screen && window.screen.lockOrientation) {
    window.screen.lockOrientation("portrait");
  }
} */