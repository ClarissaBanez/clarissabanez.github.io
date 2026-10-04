import { useEffect } from 'react'

const NAME = 'Clarissa Bañez'
const DEFAULT_DESC = 'Clarissa Bañez is a Filipino visual artist based in Prague, Czech Republic.'

// Gives each page its own browser-tab title and search description.
export default function usePageMeta(title, description = DEFAULT_DESC) {
  useEffect(() => {
    document.title = title ? `${title} | ${NAME}` : NAME
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}
