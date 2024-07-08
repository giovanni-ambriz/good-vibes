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
// { refetchAff }: { refetchAff: number }
export default function DisplayAffirmation() {
  const [displayText, setDisplayText] = useState('')
  const { data, isLoading, isFetching, isError, error} = useAffirmation()

  // useEffect(() => {
  //   if (refetchAff > 0) {
  //     refetch()
  //   }
  // }, [refetchAff, refetch])
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
    return <p>Something went wrong!{error.message}</p>
  }

  return (
    <div>
      <p className="affirmation" style={{ display: isFetching ? 'none' : 'block' }}>{displayText}</p>
      {isFetching && <p className="refetch">Loading a new affirmation... ✨</p>}
    </div>
  )
}
