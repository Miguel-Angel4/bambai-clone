import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesGrid } from './components/FeaturesGrid';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Prices } from './components/Prices';

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/precios" element={<Prices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
