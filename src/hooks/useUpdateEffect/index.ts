import { DependencyList, useEffect, useRef } from 'react';

function useUpdateEffect(effect: () => void, dependencies?: DependencyList) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

export default useUpdateEffect;
