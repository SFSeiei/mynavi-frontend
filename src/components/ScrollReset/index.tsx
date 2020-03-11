import React, { useEffect } from 'react';
import { useRouter } from 'providers/routerProvider';

const ScrollReset = React.forwardRef((props, ref) => {
  const { location } = useRouter();

  useEffect(() => {
    if (ref) {
      (ref as any).current.scrollTop = 0;
    }
  }, [location.pathname, ref]);

  return null;
});

export default ScrollReset;
