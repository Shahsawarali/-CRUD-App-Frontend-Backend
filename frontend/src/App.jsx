import { useState } from 'react'
import axios from 'axios'

function App() {
  const API_URL = 'hhttp://localhost:3000/users'
  const fertchUsers = async () => {
      const response = await axios.get(API_URL)
      const content = response.data

  }

  return (
    <>
     <h1>CRUD Application</h1>
    </>
  )
}

export default App
