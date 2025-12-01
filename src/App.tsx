import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesGrid } from './components/FeaturesGrid';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Prices } from './components/Prices';
import { HomeAlarms } from './components/HomeAlarms';
import { MotionSensors } from './components/MotionSensors';

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
            <Route path="/alarmas-casa" element={<HomeAlarms />} />
            <Route path="/sensores-detectores" element={<MotionSensors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
