
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesGrid } from './components/FeaturesGrid';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
