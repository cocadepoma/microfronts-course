import React, { useRef, useEffect } from 'react';

import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);

    return () => {
      ref.current = null;
    }
  }, []);

  return <div ref={ref}></div>
};

export default MarketingApp;

