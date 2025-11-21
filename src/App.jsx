import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Micromarket from './pages/Micromarket';
import Vending from './pages/Vending';
import Contact from './pages/Contact';
import PrivacyTerms from './pages/PrivacyTerms';
import NotFound from "./pages/NotFound";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/micromarket" element={<Micromarket />} />
        <Route path="/vending" element={<Vending />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacyterms" element={<PrivacyTerms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
