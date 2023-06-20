import { useEffect, useState } from 'react'
const API_IMAGE = 'https://cataas.com/'

export function useCatImage(fact) {
  const [image, setImage] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(`${API_IMAGE}cat/says/${threeFirstWords}?json=true`)
      .then(res => res.json())
      .then(data => {
        setImage(data.url)
      })
  }, [fact])

  return { image: `${API_IMAGE}${image}` }
}
