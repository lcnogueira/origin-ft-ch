import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

describe('<Button />', () => {
  it('should call a callback function when clicked', () => {
    const callBack = jest.fn();
    render(<Button onClick={callBack}>Click me</Button>);

    userEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(callBack).toHaveBeenCalled();
  });

  it('should render a disabled styling', () => {
    render(<Button disabled>Click me</Button>);

    expect(screen.getByRole('button', { name: /click me/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled',
      }
    );
  });

  it('should not call a callback function if disabled', () => {
    const callBack = jest.fn();
    render(
      <Button onClick={callBack} disabled>
        Click me
      </Button>
    );

    userEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(callBack).not.toHaveBeenCalled();
  });

  it('should render as a link', () => {
    render(
      <Button as="a" href="/link">
        Click me
      </Button>
    );

    expect(screen.getByRole('link', { name: /click me/i })).toHaveAttribute(
      'href',
      '/link'
    );
  });
});
