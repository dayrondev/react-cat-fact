import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

function App() {
  const { fact, resetFact } = useCatFact()
  const { image } = useCatImage(fact)

  const handleClick = () => {
    resetFact()
  }

  return (
    <main>
      <h1>Cat Fact</h1>
      <button onClick={handleClick}>Reset Fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {image && (
          <img
            src={image}
            alt={`Image using the first three words of ${fact}`}
          />
        )}
      </section>
    </main>
  )
}

export default App
