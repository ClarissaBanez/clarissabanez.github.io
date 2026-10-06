import { useEffect, useRef, useState } from 'react'

// Desktop: a row of category buttons.
// Phones: one small "Recent Work ▾" button that opens a short list.
export default function CategoryFilter({ names, active, onChange }) {
  const [open, setOpen] = useState(false)
  const mobileRef = useRef(null)

  // Close the phone dropdown on Escape or when tapping elsewhere.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onPointer = (e) => !mobileRef.current?.contains(e.target) && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  if (names.length < 2) return null // nothing to filter yet

  return (
    <div className="filter-bar">
      <div className="filters filters-desktop" role="group" aria-label="Filter works by category">
        {names.map((n) => (
          <button key={n} type="button" className={n === active ? 'on' : ''} aria-pressed={n === active} onClick={() => onChange(n)}>
            {n}
          </button>
        ))}
      </div>

      <div className="filters-mobile" ref={mobileRef}>
        <button type="button" className="filter-toggle" aria-expanded={open} aria-controls="filter-list" onClick={() => setOpen((o) => !o)}>
          {active} <span aria-hidden="true" className={open ? 'caret up' : 'caret'}>▾</span>
        </button>
        {open && (
          <ul id="filter-list" className="filter-list">
            {names.map((n) => (
              <li key={n}>
                <button type="button" className={n === active ? 'on' : ''} aria-current={n === active} onClick={() => { onChange(n); setOpen(false) }}>
                  {n}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
