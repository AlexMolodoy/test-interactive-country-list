export interface CountryListItemInterface {
  flag_url: string;
  iso_code2: string;
  name_ru: string;
  deleteCountry: (id: string) => void;
}
