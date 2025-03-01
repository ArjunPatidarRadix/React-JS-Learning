import { useState } from "react";

interface IPosition {
  lat: number;
  lng: number;
}

export function useGeolocation(defaultPosition: IPosition | null = null) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [position, setPosition] = useState<IPosition | null>(defaultPosition);
  const [error, setError] = useState<string | null>(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error: any) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}
