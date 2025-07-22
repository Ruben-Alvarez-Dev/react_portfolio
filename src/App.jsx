import './App.css'
import Navbar from './components/layout/Navbar'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="app-content">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default App