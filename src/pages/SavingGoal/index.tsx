import Layout from 'components/Layout';
import Goal, { GoalProps } from 'components/Goal';
import { useParams } from 'react-router-dom';

type GoalParams = Pick<GoalProps, 'type'>;

export default function SavingGoal() {
  const { type } = useParams<GoalParams>();

  return (
    <Layout>
      <Goal type={type} />
    </Layout>
  );
}
