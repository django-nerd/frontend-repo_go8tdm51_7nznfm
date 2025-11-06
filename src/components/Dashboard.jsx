import { useState } from 'react';
import { Flame, FlagTriangleRight, Timer } from 'lucide-react';

const initialTasks = [
  { id: 1, name: 'Plan voyage roadmap', priority: 'High', progress: 80 },
  { id: 2, name: 'Design bounty posters', priority: 'Medium', progress: 45 },
  { id: 3, name: 'Daily stand-up on deck', priority: 'Low', progress: 20 },
  { id: 4, name: 'Prepare sprint treasure', priority: 'High', progress: 65 },
];

function PriorityBadge({ level }) {
  const color = level === 'High' ? 'bg-red-500' : level === 'Medium' ? 'bg-amber-500' : 'bg-sky-500';
  return (
    <span className={`inline-flex items-center gap-1 text-white text-xs px-2 py-1 rounded ${color}`}>
      <FlagTriangleRight className="w-3 h-3" /> {level}
    </span>
  );
}

function ProgressBar({ value }) {
  return (
    <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
      <div className="h-full bg-gradient-to-r from-amber-400 to-red-500" style={{ width: `${value}%` }} />
    </div>
  );
}

export default function Dashboard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('Medium');

  const addTask = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    const t = { id: Date.now(), name, priority, progress: 0 };
    setTasks([t, ...tasks]);
    setName('');
    setPriority('Medium');
  };

  return (
    <section id="dashboard" className="bg-amber-50/40 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-black text-blue-900 flex items-center gap-2">
            <Flame className="w-6 h-6 text-amber-600" />
            Crew Dashboard
          </h2>
          <div className="hidden md:flex items-center gap-2 text-blue-800/70">
            <Timer className="w-4 h-4" />
            <span>Track progress like a log pose</span>
          </div>
        </div>

        <form onSubmit={addTask} className="grid gap-3 md:grid-cols-[1fr_auto_auto] bg-white/70 backdrop-blur rounded-lg border border-amber-200 p-4 mb-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Add a new task (e.g., Chart next sprint)"
            className="px-3 py-2 rounded-md border border-blue-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <select value={priority} onChange={(e)=>setPriority(e.target.value)} className="px-3 py-2 rounded-md border border-blue-200 bg-white/90">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <button className="px-4 py-2 rounded-md bg-amber-500 hover:bg-amber-600 text-white font-semibold">Add Task</button>
        </form>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((t) => (
            <div key={t.id} className="rounded-xl border border-amber-200 bg-gradient-to-br from-white to-amber-50 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-blue-900">{t.name}</h3>
                <PriorityBadge level={t.priority} />
              </div>
              <ProgressBar value={t.progress} />
              <div className="mt-3 flex items-center justify-between text-sm text-blue-900/70">
                <span>{t.progress}% complete</span>
                <div className="flex items-center gap-2">
                  <button onClick={()=> setTasks(tasks.map(task=> task.id===t.id? { ...task, progress: Math.max(0, task.progress-10)}: task))} className="px-2 py-1 rounded bg-blue-100 text-blue-800">-10%</button>
                  <button onClick={()=> setTasks(tasks.map(task=> task.id===t.id? { ...task, progress: Math.min(100, task.progress+10)}: task))} className="px-2 py-1 rounded bg-amber-100 text-amber-800">+10%</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
