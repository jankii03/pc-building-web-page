import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import PricesPage from './PricesPage'
import AboutMePage from './AboutMePage/about-me'
import ContactPage from './ContactMePage/contat-me'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
