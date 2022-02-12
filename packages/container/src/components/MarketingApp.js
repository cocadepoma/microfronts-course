import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        if (nextPathName !== history.location.pathname) {
          history.push(nextPathName);
        }
      },
    });

    history.listen(onParentNavigate);

    return () => {
      ref.current = null;
    }
  }, []);

  return <div ref={ref}></div>
};

export default MarketingApp;

