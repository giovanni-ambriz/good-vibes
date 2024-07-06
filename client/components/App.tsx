import DisplayAffirmation from './AffDisplay'
import React, { useState } from 'react'
import DisplayImages from './ImgDisplay'
import './main.css'

const App = () => {
  const [view, setView] = useState<'home' | 'affirmations'>('home')
  const [refetchAff, setRefetchAff] = useState(0)

  const handleAffirmationsClick = () => {
    setView('affirmations'),
      setRefetchAff(prev => prev + 1)
  }


  return (
    <div className="app">
      {view === 'affirmations' && (
        <>
          <DisplayAffirmation refetchAff={refetchAff} />
          <DisplayImages />
        </>
      )}
      <button
        onClick={handleAffirmationsClick}
      >
        Click for an affirmation
      </button>
    </div>
  )
}

export default App
