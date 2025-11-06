import { Anchor, Info, Send, Mail } from 'lucide-react';

export default function AboutContact() {
  return (
    <section id="about" className="bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 py-14 grid lg:grid-cols-2 gap-10">
        {/* About */}
        <div className="bg-white/80 rounded-xl border border-amber-200 p-6">
          <div className="flex items-center gap-2 text-amber-700 mb-2">
            <Info className="w-5 h-5" />
            <h3 className="text-xl font-black text-amber-900">About the App</h3>
          </div>
          <p className="text-amber-900/80 leading-relaxed">
            Inspired by the adventurous spirit of the high seas, this tool helps you navigate your work like a true pirate captain. Plan voyages (projects), assign roles to your crew (team), and track treasure (progress) with a simple, responsive interface.
          </p>
          <ul className="mt-4 grid gap-2 text-amber-900/80">
            <li>• Warm, ocean-inspired color palette</li>
            <li>• Light, CSS-only animations for performance</li>
            <li>• Fully responsive for mobile and desktop</li>
          </ul>
          <div className="mt-4 inline-flex items-center gap-2 text-amber-800">
            <Anchor className="w-5 h-5" />
            <span>Set your anchor and focus on what matters.</span>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="bg-white/80 rounded-xl border border-blue-200 p-6">
          <div className="flex items-center gap-2 text-blue-700 mb-2">
            <Mail className="w-5 h-5" />
            <h3 className="text-xl font-black text-blue-900">Contact</h3>
          </div>
          <form className="grid gap-3">
            <input type="text" placeholder="Your Name" className="px-3 py-2 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-400" />
            <input type="email" placeholder="Email" className="px-3 py-2 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-400" />
            <textarea rows="4" placeholder="Message" className="px-3 py-2 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-400" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
          <p className="mt-4 text-sm text-blue-900/70">We respect the Grand Line’s code. Your message won’t be stored — this is a front-end demo.</p>
        </div>
      </div>
    </section>
  );
}
