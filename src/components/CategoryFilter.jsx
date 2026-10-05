import { useEffect, useRef } from 'react'

export default function CategoryFilter({ names, active, onChange }) {
  const ref = useRef(null)

  // On small screens the row scrolls sideways; keep the selected category in view.
  useEffect(() => {
    ref.current?.querySelector('.on')?.scrollIntoView({ inline: 'nearest', block: 'nearest' })
  }, [active])

  if (names.length < 2) return null // nothing to filter yet
  return (
    <div ref={ref} className="filters" role="group" aria-label="Filter works by category">
      {names.map((n) => (
        <button key={n} type="button" className={n === active ? 'on' : ''} aria-pressed={n === active} onClick={() => onChange(n)}>
          {n}
        </button>
      ))}
    </div>
  )
}
