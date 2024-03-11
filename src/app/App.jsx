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
