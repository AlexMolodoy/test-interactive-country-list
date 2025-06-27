export interface LoaderInterface {
  isLoading: boolean;
}

export interface PositionInterface {
  coords: {
    latitude: number;
    longitude: number;
  };
}

type Address = {
  house_number?: string;
  road?: string;
  suburb?: string;
  city: string;
  state: string;
  'ISO3166-2-lvl4': string;
  postcode: string;
  country: string;
  country_code: string;
};

type BoundingBox = [string, string, string, string];

export interface GeoResponseInterface {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  address: Address;
  boundingbox: BoundingBox;
}

export interface CountryDataInterface {
  flag_url: string;
  iso_code2: string;
  iso_code3?: string;
  name_ru: string;
}
