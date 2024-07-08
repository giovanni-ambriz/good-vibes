import { Affirmation } from '../../models/affirmations'

export function wordByWord(text: Affirmation, setText) {
  if (text.affirmation) {
    const wordsArray = text.affirmation.split(' ')

    let index = -1 // index = 0
    const displayNextWord = () => {
      index++
      if (index < wordsArray.length) {
        setText((prev: string) => prev + wordsArray[index] + ' ')
        // index++
        setTimeout(displayNextWord, 300)
      }
    }
    displayNextWord()
  }
}
