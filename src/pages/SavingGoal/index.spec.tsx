import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { addAMonth, getMonthName, getYear } from 'lib/date';
import SavingGoal from '.';

describe('<SavingGoal />', () => {
  it('should update goal description when user changes total amount or reach month', () => {
    render(<SavingGoal />);

    const initialReachDate = addAMonth(new Date());
    const initialReachMonth = getMonthName(initialReachDate);
    const initialReachYear = getYear(initialReachDate);
    const totalAmountInput = screen.getByRole('textbox', {
      name: /total amount/i,
    });

    expect(totalAmountInput).toHaveValue('250,000.00');
    expect(screen.getByTestId('monthly-deposit')).toHaveTextContent(
      '$250,000.00'
    );
    expect(screen.getByTestId('result-message')).toHaveTextContent(
      `You’re planning 1 monthly deposit(s) to reach your $250,000.00 goal by ${initialReachMonth} ${initialReachYear}.`
    );

    userEvent.type(totalAmountInput, '000');
    expect(totalAmountInput).toHaveValue('250,000,000.00');
    expect(screen.getByTestId('monthly-deposit')).toHaveTextContent(
      '$250,000,000.00'
    );
    expect(screen.getByTestId('result-message')).toHaveTextContent(
      `You’re planning 1 monthly deposit(s) to reach your $250,000,000.00 goal by ${initialReachMonth} ${initialReachYear}.`
    );

    const nextMonthButton = screen.getByRole('button', {
      name: /next month/i,
    });
    userEvent.click(nextMonthButton);

    const twoMonthsFarDate = addAMonth(initialReachDate);
    const twoMonthsFarDateMonth = getMonthName(twoMonthsFarDate);
    const twoMonthsFarDateYear = getYear(twoMonthsFarDate);
    expect(screen.getByTestId('monthly-deposit')).toHaveTextContent(
      '$125,000,000.00'
    );
    expect(screen.getByTestId('result-message')).toHaveTextContent(
      `You’re planning 2 monthly deposit(s) to reach your $250,000,000.00 goal by ${twoMonthsFarDateMonth} ${twoMonthsFarDateYear}.`
    );
  });
});
