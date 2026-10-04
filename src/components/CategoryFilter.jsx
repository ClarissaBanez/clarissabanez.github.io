export default function CategoryFilter({ names, active, onChange }) {
  if (names.length < 2) return null // nothing to filter yet
  return (
    <div className="filters" role="group" aria-label="Filter works by category">
      {names.map((n) => (
        <button key={n} type="button" className={n === active ? 'on' : ''} aria-pressed={n === active} onClick={() => onChange(n)}>
          {n}
        </button>
      ))}
    </div>
  )
}
