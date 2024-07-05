import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAffirmation } from '../apiClient'
import { Affirmation } from '../../models/affirmations'

export function useAffirmation() {
  return useQuery<Affirmation, Error>({
    queryKey: ['affirmation'],
    queryFn: getAffirmation,
  })
}

export default function DisplayAffirmation() {
  const { data, isLoading, isError, error } = useAffirmation()

  if (isLoading) {
    return <p>Loading affirmation...</p> // We could use a loading spinner for this
  }

  if (isError) {
    return <p>Something went wrong!,{error.message}</p>
  }

  return (
    <div>
      <h2>Affirmation:</h2>
      <p>{data.affirmation}</p>
    </div>
  )
}
