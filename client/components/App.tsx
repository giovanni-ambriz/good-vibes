import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import DisplayAffirmation from './AffDisplay'

const App = () => {
  const [view, setView] = useState<'home' | 'affirmations'>('home')

  return (
    <div
      style={{
        padding: '40px',
        fontFamily: 'Comic-Sans, Arial, Times-New-Roman',
      }}
    ></div>
  )
}

/*

const getGreeting = async () => {
  const response = await fetch('/api/v1/affirmations')
  if (!response.ok) {
    throw new Error('Bad network response')
  }
  const data = await response.json()
  return data.affirmation
}

const App = () => {
  return (
    <>
      <h1>Affirmations and Images Generator</h1>
      <h3>
        Click Affirm! and get a genuine affirmation and calm picture to remind
        you how great you are.
      </h3>

      <div>
        <DisplayAffirmation />
      </div>
      <div>
        <ImgDisplay />
      </div>
    </>
  )
}
export default App

*/
