import React, {useEffect, useState, useCallback} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import styles from './styles.module.css';

const SCROLLABLE_THRESHOLD = 100;
const BOTTOM_THRESHOLD = 50;

export default function BackToTopButton() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const distanceFromBottom = fullHeight - (scrollY + viewportHeight);
      const scrollableDistance = fullHeight - viewportHeight;
      setShown(
        scrollableDistance > SCROLLABLE_THRESHOLD &&
          distanceFromBottom > BOTTOM_THRESHOLD,
      );
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, []);

  return (
    <button
      aria-label={translate({
        id: 'theme.BackToTopButton.buttonAriaLabel',
        message: 'Scroll back to top',
        description: 'The ARIA label for the back to top button',
      })}
      className={clsx(
        'clean-btn',
        ThemeClassNames.common.backToTopButton,
        styles.backToTopButton,
        shown && styles.backToTopButtonShow,
      )}
      type="button"
      onClick={scrollToBottom}
    />
  );
}
