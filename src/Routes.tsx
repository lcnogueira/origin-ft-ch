import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import SavingGoal from 'pages/SavingGoal';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/goal/:type" exact component={SavingGoal}></Route>
      </Switch>
    </Router>
  );
}
