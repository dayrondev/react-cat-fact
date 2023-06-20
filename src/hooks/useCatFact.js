import { useEffect, useState } from 'react'
import { getFact } from '../services/facts'

export function useCatFact() {
  const [fact, setFact] = useState()

  const resetFact = () => {
    getFact().then(newFact => setFact(newFact))
  }

  useEffect(resetFact, [])

  return { fact, resetFact }
}
