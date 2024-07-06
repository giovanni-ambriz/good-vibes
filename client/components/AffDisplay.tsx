import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAffirmation } from '../apiClient'
import { Affirmation } from '../../models/affirmations'
import LoadingSpinner from './LoadingSpinner'
import { useEffect } from 'react'

export function useAffirmation() {
  return useQuery<Affirmation, Error>({
    queryKey: ['affirmation'],
    queryFn: getAffirmation,
  })
}

export default function DisplayAffirmation({ refetchAff }: { refetchAff: number }) {
  const { data, isLoading, isFetching, isError, error, refetch } = useAffirmation()

  useEffect(() => {
    if (refetchAff > 0) {
      refetch()
    }
  }, [refetchAff, refetch])

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <p>Something went wrong!{error.message}</p>
  }

  return (
    <div>
      <p className="affirmation">{data.affirmation}</p>
      {isFetching && <p className="refetch">Loading a new affirmation... ✨</p>}
    </div>
  )
}
