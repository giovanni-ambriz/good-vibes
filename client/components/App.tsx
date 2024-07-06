import DisplayAffirmation, { useAffirmation } from './AffDisplay'
import { useState } from 'react'
import DisplayImages, { useImages } from './ImgDisplay'
import './main.css'

const App = () => {
  // const [view, setView] = useState<'home' | 'affirmations'>('home')
  // const [refetchAff, setRefetchAff] = useState(0)

  // const handleAffirmationsClick = () => {
  //   setView('affirmations'),
  //     setRefetchAff(prev => prev + 1)
  // }
  const [randomIndex, setRandomIndex] = useState(0)

  const { refetch } = useAffirmation()
  const roll = () => Math.floor(Math.random() * 9)
  
  
  return (
    <div className="app">
      {/* {view === 'affirmations' && (
        <> */}
      {/* refetchAff={refetchAff} */}
      <DisplayAffirmation />
      <DisplayImages randomIndex={randomIndex} />
      {/* </>
      )} */}
      <button onClick={() => (refetch(), setRandomIndex(roll()))}>
        Click for an affirmation
      </button>
    </div>
  )
}

export default App
