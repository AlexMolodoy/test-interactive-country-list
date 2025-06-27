import { useEffect, useState } from 'react';
import { GeoResponseInterface, PositionInterface } from '../types';

function useGeolocationWithCountryCode() {
  const [countryCode, setCountryCode] = useState<GeoResponseInterface>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Геолокация не поддерживается вашим браузером');
      setIsLoading(false);
      return;
    }

    const handleSuccess = async (position: PositionInterface) => {
      try {
        const { latitude, longitude } = position.coords;

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await response.json();

        if (data.error) {
          throw new Error(data.reason || 'Ошибка при получении кода страны');
        }

        setCountryCode(data.address.country_code);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Произошла ошибка при получении данных'
        );
      } finally {
        setIsLoading(false);
      }
    };

    const handleError = (error: unknown) => {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Произошла ошибка при получении локации');
      }
      setIsLoading(false);
    };

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);

    return () => {};
  }, []);

  return { countryCode, error, isLoading };
}

export default useGeolocationWithCountryCode;
