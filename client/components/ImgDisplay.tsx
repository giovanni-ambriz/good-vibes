import { useQuery } from '@tanstack/react-query'
import { getImages } from '../apiClient'
import LoadingSpinner from './LoadingSpinner'
import './main.css'

export function useImages() {
  return useQuery<string[], Error>({
    queryKey: ['images'],
    queryFn: getImages,
  })
}

export default function DisplayImages() {
  const { data, isLoading, isError } = useImages();

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError || !data || data.length === 0) {
    return <p>Something went wrong while fetching images!</p>;
  }

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomImage = data[randomIndex];

  if (randomImage) {
    document.body.style.backgroundImage = `url(${randomImage})`;
  }

  return null
}
