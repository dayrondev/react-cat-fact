const API_FACT = 'https://catfact.ninja/fact'

export async function getFact() {
  const res = await fetch(API_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

/*export function getFact() {
  fetch(API_FACT)
    .then(res => res.json())
    .then(data => {
      console.log({ fact: data.fact })
      return data.fact
    })
}*/
