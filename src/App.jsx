import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import ServiceDetails from './pages/ServiceDetails/ServiceDetails'
import ContactUs from './pages/ContactUs/ContactUs'
import BidsTender from './pages/BidsTender/BidsTender'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/bids-tender" element={<BidsTender />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
