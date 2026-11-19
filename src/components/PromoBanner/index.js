import React, {useEffect} from 'react';
import {PROMO, PROMO_ATTRIBUTE, isPromoActive} from './promo';
import styles from './styles.module.css';

// setTimeout can't wait longer than about 24.8 days.
const MAX_TIMEOUT = 2147483647;

function Star() {
  return (
    <svg className={styles.star} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M8 0C8.5 4.4 11.6 7.5 16 8C11.6 8.5 8.5 11.6 8 16C7.5 11.6 4.4 8.5 0 8C4.4 7.5 7.5 4.4 8 0Z"
      />
    </svg>
  );
}

/**
 * Keeps the banner in step with the schedule while the page stays open:
 * shows it at the start time and hides it at the end time.
 */
function usePromoSchedule() {
  useEffect(() => {
    const root = document.documentElement;
    const {search} = window.location;
    const start = Date.parse(PROMO.start);
    const end = Date.parse(PROMO.end);
    let timer;

    const update = () => {
      const now = Date.now();
      if (isPromoActive(now, search)) {
        root.setAttribute(PROMO_ATTRIBUTE, 'on');
      } else {
        root.removeAttribute(PROMO_ATTRIBUTE);
      }

      const next = now < start ? start : now < end ? end : null;
      if (next !== null) {
        timer = setTimeout(update, Math.min(next - now, MAX_TIMEOUT));
      }
    };

    update();
    return () => clearTimeout(timer);
  }, []);
}

export default function PromoBanner() {
  usePromoSchedule();

  return (
    <aside className={styles.banner} aria-label="Black Friday sale">
      <div className={styles.inner}>
        <p className={styles.text}>
          <span>Black Friday sale</span>
          <Star />
          <span>November 23 - December 6</span>
          <Star />
          <span>Get up to 70% off</span>
        </p>
        <a className={styles.button} href={PROMO.url} target="_blank" rel="noopener">
          Claim the deal
        </a>
      </div>
    </aside>
  );
}
