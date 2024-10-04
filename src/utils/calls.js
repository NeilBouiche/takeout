export const fetchAllData = async () => {
  const response = await fetch('http://localhost:3000/meals')
  if (!response.ok) {
    throw new Error('ERROR')
  }
  const data = await response.json()
  return data
}
