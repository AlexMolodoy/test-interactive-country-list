import { useCallback, useEffect, useState } from 'react';
import { CountryDataInterface } from '../types';

function useGetCountriesList() {
  const [data, setData] = useState<Array<CountryDataInterface>>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json'
      );

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : 'Произошла ошибка при получении данных'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
}

export default useGetCountriesList;
