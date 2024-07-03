// this is where functions to display a different image when an affirmation is generated should go

import { useQuery } from '@tanstack/react-query'
import { getImages } from '../apiClient'
import { useImages } from '../apiClient'

export function useImages() {
  return useQuery<string[], Error>({
    queryKey: ['images'],
    queryFn: getImages,
  });
}

export default function DisplayImages() {
  const { data, isLoading, isError } = useImages();

  if (isLoading) {
    return <p>Loading images...</p>
  }

  if (isError) {
    return <p>Something went wrong while fetching images!</p>
  }

  return (
    <div>
      <h2>Images:</h2>
      <div>
        {data.map((imageUrl, index) => (
          <img key={''} src={''} alt={''} />
        ))}
      </div>
    </div>
  );
}