// Small, quiet photo credit line. Renders nothing if there is no credit.
export default function PhotoCredit({ credit, className = '' }) {
  if (!credit) return null
  return <p className={`credit ${className}`}>Photo: {credit}</p>
}
