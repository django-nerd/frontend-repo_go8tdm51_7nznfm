import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Team from './components/Team';
import AboutContact from './components/AboutContact';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-100 via-amber-50 to-rose-100 border-t border-blue-100">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-blue-900">
        <p className="text-sm">© {new Date().getFullYear()} Straw Hat Tasks — Sail boldly.</p>
        <div className="text-xs text-blue-900/70">Built with React & Tailwind. One Piece-inspired theme, fan-made.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop')] bg-fixed bg-cover bg-center">
      <div className="min-h-screen backdrop-blur-[2px]">
        <Navbar />
        <main>
          <Hero />
          <Dashboard />
          <Team />
          <AboutContact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
