import { useEffect, useState } from "react";

export function useKonum() {
  const [isAllowed, setIsAllowed] = useState<boolean>(false);
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  }>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsAllowed(true);
        setCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        setError(error.message);
        setIsAllowed(false);
      }
    );
  }, []);

  return { isAllowed, data: coordinates, error };
}
