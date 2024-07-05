import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import DisplayAffirmation from './AffDisplay'
import DisplayImages from './ImgDisplay'

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
export default App
