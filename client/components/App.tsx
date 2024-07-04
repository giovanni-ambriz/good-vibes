import DisplayAffirmation from './AffDisplay'
import ImgDisplay from './ImgDisplay'

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
      <div>{/* <ImgDisplay /> */}</div>
    </>
  )
}
export default App
