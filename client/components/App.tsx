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
  const { refetch: affRefetch } = useAffirmation()
  const { refetch: imgRefetch } = useImages()

  return (
    <div className="app">
      {/* {view === 'affirmations' && (
        <> */}
      {/* refetchAff={refetchAff} */}
      <DisplayAffirmation />
      <DisplayImages />
      {/* </>
      )} */}
      <button onClick={() => (affRefetch(), imgRefetch())}>
        Click for an affirmation
      </button>
    </div>
  )
}

export default App
