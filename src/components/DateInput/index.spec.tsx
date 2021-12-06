import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  addAMonth,
  getMonthName,
  getYear,
  removeAMonth,
  updateMonth,
} from 'lib/date';
import DateInput from '.';

describe('<DateInput />', () => {
  it('should start with an initial value if provided', () => {
    const initialValue = updateMonth(new Date(), 5);
    render(<DateInput initialValue={initialValue} />);

    expect(screen.getByText(getMonthName(initialValue))).toBeInTheDocument();
    expect(screen.getByText(getYear(initialValue))).toBeInTheDocument();
  });

  it('should start with a mimimum date value if initial value is not provided', () => {
    render(<DateInput />);

    const minimumDate = addAMonth(new Date());
    expect(screen.getByText(getMonthName(minimumDate))).toBeInTheDocument();
    expect(screen.getByText(getYear(minimumDate))).toBeInTheDocument();
  });

  it('should start with a mimimum date value if initial value is less than minimum date', () => {
    const minimumDate = addAMonth(new Date());
    const pastDate = removeAMonth(minimumDate);

    render(<DateInput initialValue={pastDate} />);

    expect(screen.queryByText(getMonthName(pastDate))).not.toBeInTheDocument();
    expect(screen.queryByText(getYear(pastDate))).not.toBeInTheDocument();

    expect(screen.getByText(getMonthName(minimumDate))).toBeInTheDocument();
    expect(screen.getByText(getYear(minimumDate))).toBeInTheDocument();
  });

  it('should decrease and increase months when clicking the arrow buttons', async () => {
    const nextMonth = addAMonth(new Date());
    const twoMonthsFromNow = updateMonth(new Date(), 2);

    render(<DateInput initialValue={nextMonth} />);

    expect(screen.getByText(getMonthName(nextMonth))).toBeInTheDocument();
    expect(
      screen.queryByText(getMonthName(twoMonthsFromNow))
    ).not.toBeInTheDocument();

    userEvent.click(
      screen.getByRole('button', {
        name: /next month/i,
      })
    );
    await waitFor(() => {
      expect(
        screen.queryByText(getMonthName(nextMonth))
      ).not.toBeInTheDocument();

      expect(
        screen.getByText(getMonthName(twoMonthsFromNow))
      ).toBeInTheDocument();
    });

    userEvent.click(
      screen.getByRole('button', {
        name: /previous month/i,
      })
    );
    await waitFor(() => {
      expect(
        screen.queryByText(getMonthName(twoMonthsFromNow))
      ).not.toBeInTheDocument();

      expect(screen.getByText(getMonthName(nextMonth))).toBeInTheDocument();
    });
  });

  it('should decrease and increase months when clicking the keyboard arrows', async () => {
    const nextMonth = addAMonth(new Date());
    const twoMonthsFromNow = updateMonth(new Date(), 2);

    const { container } = render(<DateInput initialValue={nextMonth} />);
    const inputWrapper = container.querySelector('.input-wrapper')!;

    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(inputWrapper).toHaveFocus();

    expect(screen.getByText(getMonthName(nextMonth))).toBeInTheDocument();
    expect(
      screen.queryByText(getMonthName(twoMonthsFromNow))
    ).not.toBeInTheDocument();

    fireEvent.keyUp(inputWrapper, { key: 'ArrowRight' });
    await waitFor(() => {
      expect(
        screen.queryByText(getMonthName(nextMonth))
      ).not.toBeInTheDocument();

      expect(
        screen.getByText(getMonthName(twoMonthsFromNow))
      ).toBeInTheDocument();
    });

    fireEvent.keyUp(inputWrapper, { key: 'ArrowLeft' });
    await waitFor(() => {
      expect(
        screen.queryByText(getMonthName(twoMonthsFromNow))
      ).not.toBeInTheDocument();

      expect(screen.getByText(getMonthName(nextMonth))).toBeInTheDocument();
    });
  });

  it('should not decrease/increase months when clicking the keyboard arrows if not focused', async () => {
    const nextMonth = addAMonth(new Date());
    const twoMonthsFromNow = updateMonth(new Date(), 2);

    const { container } = render(<DateInput initialValue={nextMonth} />);
    const inputWrapper = container.querySelector('.input-wrapper')!;

    expect(document.body).toHaveFocus();

    expect(screen.getByText(getMonthName(nextMonth))).toBeInTheDocument();
    expect(
      screen.queryByText(getMonthName(twoMonthsFromNow))
    ).not.toBeInTheDocument();

    fireEvent.keyUp(inputWrapper, { key: 'ArrowRight' });
    await waitFor(() => {
      expect(screen.queryByText(getMonthName(nextMonth))).toBeInTheDocument();

      expect(
        screen.queryByText(getMonthName(twoMonthsFromNow))
      ).not.toBeInTheDocument();
    });
  });

  it('should not call the callback function on first render', () => {
    const onDateChange = jest.fn();
    render(<DateInput onDateChange={onDateChange} />);

    expect(onDateChange).not.toHaveBeenCalled();
  });

  it('should call the callback function with the updated value when the date changes', () => {
    const nextMonth = addAMonth(new Date());
    const twoMonthsFromNow = updateMonth(new Date(), 2);
    const onDateChange = jest.fn();

    const { container } = render(
      <DateInput initialValue={nextMonth} onDateChange={onDateChange} />
    );

    const inputWrapper = container.querySelector('.input-wrapper')!;
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(inputWrapper).toHaveFocus();

    fireEvent.keyUp(inputWrapper, { key: 'ArrowRight' });
    expect(onDateChange).toHaveBeenCalledWith(twoMonthsFromNow);

    fireEvent.keyUp(container, { key: 'ArrowLeft' });
    expect(onDateChange).toHaveBeenCalledWith(nextMonth);
  });

  it('should not call the callback function with the updated value when the date changes if not focused', () => {
    const onDateChange = jest.fn();

    const { container } = render(<DateInput onDateChange={onDateChange} />);

    const inputWrapper = container.querySelector('.input-wrapper')!;
    expect(document.body).toHaveFocus();
    expect(inputWrapper).not.toHaveFocus();

    fireEvent.keyUp(container, { key: 'ArrowRight' });
    expect(onDateChange).not.toHaveBeenCalled();
  });

  it('should only allow navigating to future months ', async () => {
    const minimumDate = addAMonth(new Date());
    const pastDate = removeAMonth(minimumDate);

    const { container } = render(<DateInput initialValue={minimumDate} />);

    const previousMonthButton = screen.getByRole('button', {
      name: /previous month/i,
    });

    expect(screen.getByText(getMonthName(minimumDate))).toBeInTheDocument();
    expect(screen.getByText(getYear(minimumDate))).toBeInTheDocument();

    expect(previousMonthButton).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled',
    });

    userEvent.click(previousMonthButton);
    expect(screen.queryByText(getMonthName(pastDate))).not.toBeInTheDocument();
    expect(screen.queryByText(getYear(pastDate))).not.toBeInTheDocument();
    expect(screen.getByText(getMonthName(minimumDate))).toBeInTheDocument();
    expect(screen.getByText(getYear(minimumDate))).toBeInTheDocument();

    fireEvent.keyUp(container, { key: 'ArrowLeft' });
    expect(screen.queryByText(getMonthName(pastDate))).not.toBeInTheDocument();
    expect(screen.queryByText(getYear(pastDate))).not.toBeInTheDocument();
    expect(screen.getByText(getMonthName(minimumDate))).toBeInTheDocument();
    expect(screen.getByText(getYear(minimumDate))).toBeInTheDocument();
  });

  it('should not call the callback function when the button is disabled', () => {
    const onDateChange = jest.fn();

    render(<DateInput onDateChange={onDateChange} />);

    const previousMonthButton = screen.getByRole('button', {
      name: /previous month/i,
    });

    expect(previousMonthButton).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled',
    });

    userEvent.click(previousMonthButton);
    expect(onDateChange).not.toHaveBeenCalled();
  });
});
