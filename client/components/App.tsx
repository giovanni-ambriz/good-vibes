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
  const [count, setCount] = useState(0)

  const {
    data: greeting,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['greeting', count],
    queryFn: getGreeting,
  })

  if (isLoading) return <p>Loading</p>
  
  return (
    <>
      {count}
      <h1>{greeting}</h1>
      {isError && <p style={{ color: 'red' }}>Error getting greeting</p>}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default App

*/
