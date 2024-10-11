export const fetchAllData = async () => {
  const response = await fetch('http://localhost:3000/meals')
  if (!response.ok) {
    throw new Error('ERROR')
  }
  const data = await response.json()
  return data
}

export const sendAllData = async (data) => {
  try {
    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const result = await response.json()
    console.log('Data saved successfully:', result)
  } catch (error) {
    console.log('Error saving data:', error)
  }
}
