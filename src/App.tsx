import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesGrid } from './components/FeaturesGrid';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Prices } from './components/Prices';
import { HomeAlarms } from './components/HomeAlarms';
import { MotionSensors } from './components/MotionSensors';
import { AlarmsByApplication } from './components/AlarmsByApplication';
import { AlarmsBySpace } from './components/AlarmsBySpace';
import { Values } from './components/Values';

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
            <Route path="/alarmas-aplicacion" element={<AlarmsByApplication />} />
            <Route path="/alarmas-espacio" element={<AlarmsBySpace />} />
            <Route path="/valores" element={<Values />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
