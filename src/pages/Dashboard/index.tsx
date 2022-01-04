import Card from 'components/Card';
import Layout from 'components/Layout';

import { GOALS_LIST, GoalType } from 'components/Goal';

import * as S from './styles';

export default function Dashboard() {
  return (
    <Layout>
      <S.Container>
        <S.Title>Here are your saving goals!</S.Title>
        <S.Grid>
          {Object.keys(GOALS_LIST).map((type) => (
            <Card
              key={type}
              type={type as GoalType}
              //@ts-ignore
              title={GOALS_LIST[type].title}
              href={`/goal/${type}`}
              //@ts-ignore
              icon={GOALS_LIST[type].icon}
            />
          ))}
        </S.Grid>
      </S.Container>
    </Layout>
  );
}
