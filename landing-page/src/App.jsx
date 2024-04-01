import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import './App.css'
import Features from './pages/Features.jsx';
import Contact from './pages/Contact.jsx';
import Signup from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
  
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="features" element={<Features />} />
    <Route path="signup" element={<Signup />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="contact" element={<Contact />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
