import { CountryListItem } from '@/features';
import { styles } from './styles';

import { CountriesListInterface } from './types';

function animateAndRemoveElement(DOMElement: HTMLElement): void {
  DOMElement.animate(
    [
      { transform: 'translateX(0)', maxHeight: '50px', opacity: 1 },
      { transform: 'translateX(-100%)', maxHeight: '50px', opacity: 0 },
      { transform: 'translateX(-100%)', maxHeight: '0', opacity: 0 },
    ],
    {
      duration: 1000,
      easing: 'ease-in-out',
    }
  ).onfinish = () => {
    DOMElement.remove();
  };
}

const CountriesList = ({ data }: CountriesListInterface) => {
  const handleDelete = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      animateAndRemoveElement(element);
    }
  };

  return (
    <div style={styles.container}>
      {data.map((country, index) => (
        <CountryListItem
          key={index}
          flag_url={country.flag_url}
          iso_code2={country.iso_code2}
          deleteCountry={handleDelete}
          name_ru={country.name_ru}
        />
      ))}
    </div>
  );
};

export default CountriesList;
