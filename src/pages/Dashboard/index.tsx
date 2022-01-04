import Card from 'components/Card';
import Layout from 'components/Layout';
import HouseIcon from 'assets/icons/HouseIcon';

import * as S from './styles';

export default function Dashboard() {
  return (
    <Layout>
      <S.Container>
        <S.Title>Here are your saving goals!</S.Title>
        <S.Grid>
          <Card
            title="Go to college"
            href="/goal/college"
            icon={<HouseIcon />}
          />
          <Card
            title="Go to college"
            href="/goal/college"
            icon={<HouseIcon />}
          />
          <Card
            title="Go to college"
            href="/goal/college"
            icon={<HouseIcon />}
          />
          <Card
            title="Go to college"
            href="/goal/college"
            icon={<HouseIcon />}
          />
          <Card
            title="Go to college"
            href="/goal/college"
            icon={<HouseIcon />}
          />
        </S.Grid>
      </S.Container>
    </Layout>
  );
}
