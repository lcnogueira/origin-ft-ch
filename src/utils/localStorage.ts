import { GoalType } from 'components/Goal';

export function getItems(key: string) {
  const items = localStorage.getItem(key) || '[]';
  return JSON.parse(items);
}

type Goal = {
  type: string;
  moneyInCents: number;
  reachDate: Date;
};

export function getItem(key: string, type: GoalType) {
  const items = getItems(key);
  return items.find((item: Goal) => item.type === type) || null;
}

export function saveItem(key: string, goal: Goal) {
  const savedGoals: Goal[] = getItems(key);

  const foundGoal = savedGoals.find((item) => item.type === goal.type);

  if (foundGoal) {
    const updatedGoals = savedGoals.map((saved) =>
      saved.type === goal.type ? goal : saved
    );
    return window.localStorage.setItem(key, JSON.stringify(updatedGoals));
  }

  window.localStorage.setItem(key, JSON.stringify([...savedGoals, goal]));
}
