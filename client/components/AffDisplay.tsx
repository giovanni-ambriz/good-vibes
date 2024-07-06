import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAffirmation } from '../apiClient'
import { Affirmation } from '../../models/affirmations'
import LoadingSpinner from './LoadingSpinner'
import { wordByWord } from './wordByWord'

export function useAffirmation() {
  return useQuery<Affirmation, Error>({
    queryKey: ['affirmation'],
    queryFn: getAffirmation,
  })
}

export default function DisplayAffirmation() {
  const [displayText, setDisplayText] = useState('')
  const { data, isLoading, isError, error } = useAffirmation()
  useEffect(() => {
    if (data) {
      setDisplayText('')
      wordByWord(data, setDisplayText)
    }
  }, [data])
  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <p>Something went wrong!,{error.message}</p>
  }

  return (
    <div>
      <h2>Affirmation:</h2>
      <p>{displayText}</p>
    </div>
  )
}
