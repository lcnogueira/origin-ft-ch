import useUpdateEffect from '.';
import { renderHook } from '@testing-library/react-hooks';

describe('useUpdateEffect', () => {
  it('does not run on first mount', async () => {
    const myEffect = jest.fn();

    renderHook(() => useUpdateEffect(myEffect, []));
    expect(myEffect).not.toHaveBeenCalled();
  });

  it('runs on dependency update', () => {
    const myEffect = jest.fn();
    expect(myEffect).not.toHaveBeenCalled();

    const { rerender } = renderHook(
      ({ dependency }) => useUpdateEffect(myEffect, [dependency]),
      { initialProps: { dependency: 'some value' } }
    );

    expect(myEffect).not.toHaveBeenCalled();

    rerender({ dependency: 'new value' });
    expect(myEffect).toHaveBeenCalledTimes(1);
  });
});
