import { render, screen } from '@testing-library/react';
import Layout from '.';

jest.mock('components/NavBar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mocked Navbar"></div>;
    },
  };
});

describe('<Layout />', () => {
  it('should render NavBar and children', () => {
    render(
      <Layout>
        <h1>Children</h1>
      </Layout>
    );

    expect(screen.getByTestId('Mocked Navbar')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /children/i })
    ).toBeInTheDocument();
  });
});
