export default function StatCard({ value, label }) {
  return (
    <div className="glass rounded-2xl p-5 text-center hover:border-amber-500/30 transition-colors">
      <div className="font-display text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">{value}</div>
      <div className="text-gray-500 dark:text-slate-500 text-xs">{label}</div>
    </div>
  )
}
