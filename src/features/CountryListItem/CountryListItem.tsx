/* eslint-disable @next/next/no-img-element */
import { DeleteOutlined, FlagOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
import { styles } from './styles';
import { CountryListItemInterface } from './types';

const CountryListItem = (country: CountryListItemInterface) => {
  const { flag_url, name_ru, iso_code2, deleteCountry } = country;

  const [isImageError, setIsImageError] = useState<boolean>(false);

  const handleImageError = () => {
    setIsImageError(true);
  };

  return (
    <div id={iso_code2} style={styles.card}>
      <div style={styles.cardLeft}>
        {isImageError ? (
          <FlagOutlined style={{ fontSize: '36px', color: '#ccc' }} />
        ) : (
          <img
            src={'https:' + flag_url}
            alt="Avatar"
            style={styles.avatar}
            onError={handleImageError}
          />
        )}
        <span style={styles.name}>{name_ru}</span>
      </div>
      <div style={styles.cardRight}>
        <Button type="link" href={`/${iso_code2}`} target="_blank">
          more
        </Button>
        <Button
          color="red"
          shape="circle"
          icon={<DeleteOutlined />}
          size={'small'}
          onClick={() => deleteCountry(iso_code2)}
        />
      </div>
    </div>
  );
};

export default CountryListItem;
