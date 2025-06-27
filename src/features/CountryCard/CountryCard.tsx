/* eslint-disable @next/next/no-img-element */
'use client';

import { CountryDataInterface } from '@/shared';
import { Card, Layout, Typography } from 'antd';
import { styles } from './styles';

const { Title, Text, Link } = Typography;

const CountryCard = ({
  flag_url,
  iso_code2,
  name_ru,
}: CountryDataInterface) => {
  return (
    <Layout style={styles.container}>
      <Card style={styles.card} hoverable>
        <Layout style={styles.titleContainer}>
          <img style={styles.image} alt="example" src={`https:${flag_url}`} />
          <Title>{`${name_ru} (${iso_code2})`}</Title>
        </Layout>

        <Text>
          {'Прекрасная страна, если нужно больше информации - она '}
          <Link
            href={`https://www.google.com/search?q=${name_ru}`}
            target="_blank"
          >
            тут
          </Link>
        </Text>
      </Card>
    </Layout>
  );
};

export default CountryCard;
