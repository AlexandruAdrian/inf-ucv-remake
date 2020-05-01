import {useState, useEffect} from 'react';
import {throttle} from 'lodash';

const useScrollTracker = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    }
    
    window.addEventListener('scroll', throttle(handleScroll, 5000, {leading: true, trailing: false}));

    return window.removeEventListener('scroll', throttle(handleScroll, 5000, {leading: true, trailing: false}));
  }, [prevScrollPos]);

  return {visible, prevScrollPos};
}

export default useScrollTracker;