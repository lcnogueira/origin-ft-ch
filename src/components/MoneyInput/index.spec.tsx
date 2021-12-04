import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MoneyInput from '.';

describe('<MoneyInput />', () => {
  it('should render with a label', () => {
    render(<MoneyInput label="Label Text" name="money" />);

    expect(screen.getByLabelText('Label Text')).toBeInTheDocument();
  });

  it('should render without a label', () => {
    render(<MoneyInput name="money" />);

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('should render with a placeholder', () => {
    render(<MoneyInput placeholder="0.00" />);

    expect(screen.getByPlaceholderText('0.00')).toBeInTheDocument();
  });

  it('should mask the value when typing', async () => {
    const onInputChange = jest.fn();
    render(
      <MoneyInput
        onInputChange={onInputChange}
        label="Total amount"
        name="money"
      />
    );

    const input = screen.getByRole('textbox', { name: /total amount/i });
    const inputValue = '3045';

    userEvent.type(input, inputValue);
    expect(input).toHaveValue('30.45');
    expect(onInputChange).toHaveBeenCalledTimes(inputValue.length);
    expect(onInputChange).toHaveBeenCalledWith(3045);
  });

  it('should start with an initial value if provided', () => {
    render(
      <MoneyInput label="Total amount" name="money" initialValue={25000} />
    );

    expect(screen.getByRole('textbox', { name: /total amount/i })).toHaveValue(
      '250.00'
    );
  });

  it('should not change its value when disabled', async () => {
    const onInputChange = jest.fn();

    render(
      <MoneyInput
        onInputChange={onInputChange}
        label="Total amount"
        name="money"
        disabled
      />
    );

    const input = screen.getByRole('textbox', { name: /total amount/i });
    expect(input).toBeDisabled();

    const inputValue = '3045';
    userEvent.type(input, inputValue);

    expect(input).not.toHaveValue(inputValue);
    expect(onInputChange).not.toHaveBeenCalled();
  });

  it('should be accessible by tab', () => {
    render(<MoneyInput label="Total amount" name="money" />);

    const input = screen.getByRole('textbox', { name: /total amount/i });
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('should be not accessible by tab when disabled', () => {
    render(<MoneyInput label="Total amount" name="money" disabled />);

    const input = screen.getByRole('textbox', { name: /total amount/i });
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });
});
