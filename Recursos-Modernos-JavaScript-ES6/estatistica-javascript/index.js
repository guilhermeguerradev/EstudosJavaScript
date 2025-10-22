//  Função da Média Simples
const average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0)
  return sum / numbers.length
}

console.log(`Média Aritmética Simples: ${average(3, 6, 10, 9) ?? "Erro"}`)


//  Função da Média Ponderada
const weightedAverage = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  )

  const weightSum = entries.reduce(
    (accum, { weight }) => accum + (weight ?? 1),
    0
  )

  return sum / (weightSum ?? 1)
}

console.log(
  `Média Ponderada: ${
    weightedAverage(
      { number: 9, weight: 3 },
      { number: 7 },
      { number: 10, weight: 1 }
    )?.toFixed(2) ?? "Erro"
  }`
)


//  Função da Mediana
const median = (...numbers) => {
  const ordered = [...numbers].sort((a, b) => a - b)
  const mid = Math.floor(ordered.length / 2)

  return ordered.length % 2 !== 0
    ? ordered[mid]
    : average(ordered[mid - 1], ordered[mid])
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7) ?? "Erro"}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3) ?? "Erro"}`)


//  Função da Moda
const mode = (...numbers) => {
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => n === num).length,
  ])

  const [mostFrequent] = quantities.sort((a, b) => b[1] - a[1])
  return mostFrequent?.[0] ?? "Sem moda"
}

console.log(
  `Moda: ${mode(1, 1, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4) ?? "Erro"}`
)
