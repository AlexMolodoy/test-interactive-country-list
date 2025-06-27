'use client';
import { LoadingScreen, useGetCountriesList } from '@/shared';
import { CountriesList } from '@/widgets';

export default function Home() {
  const { data, loading } = useGetCountriesList();

  return loading ? <LoadingScreen /> : <CountriesList data={data ?? []} />;
}
