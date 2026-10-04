// Optional description and installation shots shown above the grid.
export default function CategoryIntro({ category }) {
  const { description, installation = [] } = category || {}
  if (!description && installation.length === 0) return null
  return (
    <section className="cat-intro">
      {description && <p className="cat-desc">{description}</p>}
      {installation.length > 0 && (
        <ul className="cat-shots">
          {installation.map((s) => (
            <li key={s.file}>
              <img src={encodeURI(`/images/thumbs/${s.file}`)} alt={s.caption || `Installation view, ${category.name}`} />
              {s.caption && <p className="caption">{s.caption}</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
