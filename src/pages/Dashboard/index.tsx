import Card from 'components/Card';
import Layout from 'components/Layout';
import * as S from './styles';

export default function Dashboard() {
  return (
    <Layout>
      <S.Container>
        <S.Title>Here are your saving goals!</S.Title>
        <S.Grid>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </S.Grid>
      </S.Container>
    </Layout>
  );
}
