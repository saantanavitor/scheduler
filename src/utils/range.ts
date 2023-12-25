export const range = (finalValue: number, initialValue = 1) => {
  const numbers = []
  for (let i = initialValue; i <= finalValue; i++) {
    numbers.push(i)
  }

  return numbers
}
