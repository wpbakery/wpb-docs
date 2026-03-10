import React, {useState, useEffect, useRef} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {
  useAnnouncementBar,
  useScrollPosition,
} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import DocSidebarItems from '@theme/DocSidebarItems';
import styles from './styles.module.css';
function useShowAnnouncementBar() {
  const {isActive} = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);
  useScrollPosition(
    ({scrollY}) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive],
  );
  return isActive && showAnnouncementBar;
}
export default function DocSidebarDesktopContent({path, sidebar, className}) {
  const showAnnouncementBar = useShowAnnouncementBar();
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      const activeLinks = navRef.current.querySelectorAll('.menu__link--active');
      let activeLink = null;

      for (const link of activeLinks) {
        if (!link.classList.contains('menu__link--sublist')) {
          activeLink = link;
          break;
        }
      }

      if (!activeLink && activeLinks.length > 0) {
        activeLink = activeLinks[activeLinks.length - 1];
      }

      if (activeLink) {
        activeLink.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [path]);

  return (
    <nav
      ref={navRef}
      aria-label={translate({
        id: 'theme.docs.sidebar.navAriaLabel',
        message: 'Docs sidebar',
        description: 'The ARIA label for the sidebar navigation',
      })}
      className={clsx(
        'menu thin-scrollbar',
        styles.menu,
        showAnnouncementBar && styles.menuWithAnnouncementBar,
        className,
      )}>
      <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
        <DocSidebarItems items={sidebar} activePath={path} level={1} />
      </ul>
    </nav>
  );
}
