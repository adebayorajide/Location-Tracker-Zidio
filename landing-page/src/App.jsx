import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import './App.css'
import Features from './pages/Features.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Pricing from './pages/Pricing.jsx';

function App() {
  
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="features" element={<Features />} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
