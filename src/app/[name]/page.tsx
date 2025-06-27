'use client';

import { CountryCard } from '@/features';
import { LoadingScreen, useGetCountriesList } from '@/shared';

export default function MoreCountry() {
  const { data, loading } = useGetCountriesList();

  const currentCountryCode = window.location.pathname.slice(1);

  const currentCountry = data?.find(
    (country) => country.iso_code2 === currentCountryCode
  );

  return loading ? (
    <LoadingScreen />
  ) : (
    <CountryCard
      flag_url={currentCountry?.flag_url || ''}
      iso_code2={currentCountry?.iso_code2 || ''}
      name_ru={currentCountry?.name_ru || ''}
    />
  );
}
