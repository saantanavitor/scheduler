export const getDaysOfWeek = (date: Date) => {
  const dayOfWeek = date.getDay()
  const dates: Date[] = []
  let aux = dayOfWeek

  for (let i = 0; i < 6; i++) {
    const dateAux = new Date(date)
    if (i < dayOfWeek) {
      dateAux.setDate(date.getDate() - aux--)
    } else {
      dateAux.setDate(date.getDate() + aux++)
    }
    dates.push(dateAux)
  }

  return dates
}
