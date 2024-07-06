import DisplayAffirmation from './AffDisplay'
import React, { useState } from 'react'

const App = () => {
  const [view, setView] = useState<'home' | 'affirmations'>('home')

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: '20px' }}>
        <nav>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              gap: '10px',
            }}
          >
            <li>
              <button
                onClick={() => setView('home')}
                style={{ padding: '10px', fontSize: '16px' }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setView('affirmations')}
                style={{ padding: '10px', fontSize: '16px' }}
              >
                Affirmations
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {view === 'home' && <h1>Welcome to the Affirmations App</h1>}
        {view === 'affirmations' && <DisplayAffirmation />}
      </main>
    </div>
  )
}

export default App
// const App = () => {
//   return (
//     <>
//       <h1>Affirmations and Images Generator</h1>
//       <h3>
//         Click Affirm! and get a genuine affirmation and calm picture to remind
//         you how great you are.
//       </h3>

//       <div>
//         <DisplayAffirmation />
//       </div>
//       <div>
//         <DisplayImages />
//       </div>
//     </>
//   )
// }
