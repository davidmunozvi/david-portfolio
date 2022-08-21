import { getCurrentBreakpoint, isMobile } from '@/utils/breakpoints'
import { useEffect, useMemo, useState } from 'react';

import breakpoints from '@/themes/breakpoints'

const useBreakpoints = () => {
  const [currentBreakpoint, setBreakPoint] = useState('');
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    handleResize();
    setBreakPoint(getCurrentBreakpoint(windowSize.width, breakpoints))

    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize.width]);
  return {
    currentBreakpoint,
    isMobile: useMemo(() => isMobile(currentBreakpoint), [currentBreakpoint])
  };
};

export default useBreakpoints;