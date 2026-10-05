import usePageMeta from '../hooks/usePageMeta.js'
import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { artworks, fullSrc } from '../data/artworks.js'
import { categories, showAllButton } from '../data/categories.js'
import CategoryFilter from '../components/CategoryFilter.jsx'
import CategoryIntro from '../components/CategoryIntro.jsx'
import ArtworkGrid from '../components/ArtworkGrid.jsx'
import Lightbox from '../components/Lightbox.jsx'

const defaultCat = categories[0].name
const hasAll = Boolean(showAllButton) && categories.length > 1
const names = [...categories.map((c) => c.name), ...(hasAll ? [showAllButton] : [])]

export default function Work() {
  usePageMeta('Work', 'Oil paintings by Clarissa Bañez, a Filipino visual artist based in Prague. Browse recent work and exhibition series.')
  // Category and open painting live in the URL, e.g. #/work?cat=Painter's%20Market&work=lemons
  const [params, setParams] = useSearchParams()
  const requested = params.get('cat')
  const cat = names.includes(requested) ? requested : defaultCat
  const category = categories.find((c) => c.name === cat)
  const openSlug = params.get('work')

  const visible = useMemo(() => (hasAll && cat === showAllButton ? artworks : artworks.filter((a) => a.categories.includes(cat))), [cat])

  const index = visible.findIndex((a) => a.slug === openSlug)
  const current = index >= 0 ? visible[index] : null
  const n = visible.length
  const neighbours = current && n > 1 ? [visible[(index + 1) % n], visible[(index - 1 + n) % n]].map(fullSrc) : []
  const base = cat === defaultCat ? {} : { cat }

  const open = (slug) => setParams({ ...base, work: slug })
  const close = useCallback(() => setParams(base, { replace: true }), [cat]) // eslint-disable-line
  const step = useCallback(
    (d) => {
      const next = visible[(index + d + visible.length) % visible.length]
      setParams({ ...base, work: next.slug }, { replace: true })
    },
    [visible, index, cat] // eslint-disable-line
  )
  const onPrev = useCallback(() => step(-1), [step])
  const onNext = useCallback(() => step(1), [step])

  return (
    <div className="page work">
      <CategoryFilter names={names} active={cat} onChange={(n) => setParams(n === defaultCat ? {} : { cat: n })} />
      <CategoryIntro category={category} />
      <ArtworkGrid works={visible} onOpen={open} />
      {current && <Lightbox work={current} index={index} total={visible.length} onClose={close} onPrev={onPrev} onNext={onNext} preload={neighbours} />}
    </div>
  )
}
