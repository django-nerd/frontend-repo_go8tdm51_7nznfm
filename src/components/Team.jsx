import { Users, BadgeDollarSign } from 'lucide-react';

const crew = [
  { name: 'Captain L.', role: 'Product Captain', img: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?q=80&w=400&auto=format&fit=crop' },
  { name: 'Navigator N.', role: 'Delivery Navigator', img: 'https://images.unsplash.com/photo-1541689530040-7d02247c1e51?q=80&w=400&auto=format&fit=crop' },
  { name: 'Swordsman Z.', role: 'Quality Guardian', img: 'https://images.unsplash.com/photo-1558222217-bb3b973cb104?q=80&w=400&auto=format&fit=crop' },
  { name: 'Chef S.', role: 'UX Chef', img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=400&auto=format&fit=crop' },
];

function Poster({ member }) {
  return (
    <div className="rounded-xl border-4 border-amber-700 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center p-3">
      <div className="rounded-lg bg-amber-50/90 p-4 text-center shadow-inner">
        <img src={member.img} alt={member.name} className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-amber-700" />
        <h3 className="mt-3 font-black text-amber-900 tracking-wide">{member.name}</h3>
        <p className="text-amber-800/80 text-sm">{member.role}</p>
        <div className="mt-3 inline-flex items-center gap-1 text-amber-700 text-xs">
          <BadgeDollarSign className="w-4 h-4" /> Bounty: 1,000,000
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-16 bg-[url('https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop')] bg-center bg-cover">
      <div className="backdrop-blur-sm bg-white/40 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 text-amber-800 mb-6">
            <Users className="w-6 h-6" />
            <h2 className="text-2xl md:text-3xl font-black">The Crew</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {crew.map((m) => (
              <Poster key={m.name} member={m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
