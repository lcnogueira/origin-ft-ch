import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { addAMonth, getMonthName, getYear } from 'utils/date';
import SavingGoal from '../../pages/SavingGoal';

describe('<SavingGoal />', () => {
  it('should update goal description when user changes total amount or reach month', () => {
    render(<SavingGoal />);

    const initialReachDate = addAMonth(new Date());
    const initialReachMonth = getMonthName(initialReachDate);
    const initialReachYear = getYear(initialReachDate);
    const totalAmountInput = screen.getByRole('textbox', {
      name: /total amount/i,
    });

    expect(totalAmountInput).toHaveValue('2,500.00');
    expect(screen.getByTestId('monthly-deposit')).toHaveTextContent(
      '$2,500.00'
    );
    expect(screen.getByTestId('result-message')).toHaveTextContent(
      `You’re planning 1 deposit to reach your $2,500.00 goal by ${initialReachMonth} ${initialReachYear}.`
    );

    userEvent.type(totalAmountInput, '000');
    expect(totalAmountInput).toHaveValue('2,500,000.00');
    expect(screen.getByTestId('monthly-deposit')).toHaveTextContent(
      '$2,500,000.00'
    );
    expect(screen.getByTestId('result-message')).toHaveTextContent(
      `You’re planning 1 deposit to reach your $2,500,000.00 goal by ${initialReachMonth} ${initialReachYear}.`
    );

    const nextMonthButton = screen.getByRole('button', {
      name: /next month/i,
    });
    userEvent.click(nextMonthButton);

    const twoMonthsFarDate = addAMonth(initialReachDate);
    const twoMonthsFarDateMonth = getMonthName(twoMonthsFarDate);
    const twoMonthsFarDateYear = getYear(twoMonthsFarDate);
    expect(screen.getByTestId('monthly-deposit')).toHaveTextContent(
      '$1,250,000.00'
    );
    expect(screen.getByTestId('result-message')).toHaveTextContent(
      `You’re planning 2 monthly deposits to reach your $2,500,000.00 goal by ${twoMonthsFarDateMonth} ${twoMonthsFarDateYear}.`
    );
  });
});
