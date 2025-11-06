import { useState } from 'react';
import { Ship, Menu, X, Anchor, Compass, Flag } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home', icon: <Flag className="w-4 h-4" /> },
    { href: '#dashboard', label: 'Dashboard', icon: <Compass className="w-4 h-4" /> },
    { href: '#team', label: 'Team', icon: <Anchor className="w-4 h-4" /> },
    { href: '#about', label: 'About', icon: <Compass className="w-4 h-4" /> },
    { href: '#contact', label: 'Contact', icon: <Anchor className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-blue-100">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-extrabold tracking-wide text-blue-900">
          <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-sky-600 text-white shadow">
            <Ship className="w-5 h-5 animate-bounce" />
            <span className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-amber-400 ring-2 ring-white" />
          </span>
          <span className="text-lg">Straw Hat Tasks</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md border border-blue-200 text-blue-800"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <ul className="hidden md:flex items-center gap-6 text-blue-900">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                {l.icon}
                <span>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t border-blue-100 bg-white/80">
          <ul className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-2 text-blue-900 hover:text-amber-600"
                >
                  {l.icon}
                  <span>{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
