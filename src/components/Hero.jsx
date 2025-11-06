import { Waves, Sun, Cloud } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-blue-100 to-amber-50" />

      {/* moving clouds */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-6 left-6 animate-[float_12s_ease-in-out_infinite] text-white/70">
          <Cloud className="w-16 h-16" />
        </div>
        <div className="absolute top-10 right-10 animate-[float_14s_ease-in-out_infinite] text-white/70" style={{animationDelay:'1s'}}>
          <Cloud className="w-20 h-20" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 relative">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 text-amber-500 mb-4">
            <Sun className="w-6 h-6" />
            <span className="uppercase tracking-widest text-sm font-semibold">Set sail for productivity</span>
            <Sun className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-blue-900 drop-shadow-sm">
            Manage your work like a Straw Hat Captain!
          </h1>
          <p className="mt-4 max-w-2xl text-blue-900/80">
            Chart your tasks, rally your crew, and cross every deadline on the Grand Line of productivity.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#dashboard" className="px-5 py-3 rounded-md bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow">
              Open Dashboard
            </a>
            <a href="#team" className="px-5 py-3 rounded-md bg-white/70 hover:bg-white text-blue-900 font-semibold border border-blue-200">
              Meet the Crew
            </a>
          </div>
        </div>

        {/* wave divider */}
        <div className="absolute -bottom-6 left-0 right-0">
          <svg className="w-full h-16 text-sky-300" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,160L40,149.3C80,139,160,117,240,117.3C320,117,400,139,480,149.3C560,160,640,160,720,154.7C800,149,880,139,960,144C1040,149,1120,171,1200,170.7C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes float { 0%,100%{ transform: translateY(0)} 50%{ transform: translateY(-10px)} }
      `}</style>
    </section>
  );
}
