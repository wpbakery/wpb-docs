import React from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {
  DocsSidebarProvider,
  useDocRootMetadata,
} from '@docusaurus/plugin-content-docs/client';
import DocRootLayout from '@theme/DocRoot/Layout';
import NotFoundContent from '@theme/NotFound/Content';
import {useLocation} from '@docusaurus/router';
import docsSidebarItems from './docsSidebarItems.json';
import devsSidebarItems from './devsSidebarItems.json';

function DocRootNotFound() {
  const {pathname} = useLocation();
  const isDevs = pathname.startsWith('/devs');
  const sidebarName = isDevs ? 'devsSidebar' : 'tutorialSidebar';
  const sidebarItems = isDevs ? devsSidebarItems : docsSidebarItems;

  return (
    <HtmlClassNameProvider className={clsx(ThemeClassNames.page.docsDocPage)}>
      <DocsSidebarProvider name={sidebarName} items={sidebarItems}>
        <DocRootLayout>
          <NotFoundContent />
        </DocRootLayout>
      </DocsSidebarProvider>
    </HtmlClassNameProvider>
  );
}

export default function DocRoot(props) {
  const currentDocRouteMetadata = useDocRootMetadata(props);
  if (!currentDocRouteMetadata) {
    return <DocRootNotFound />;
  }
  const {docElement, sidebarName, sidebarItems} = currentDocRouteMetadata;
  return (
    <HtmlClassNameProvider className={clsx(ThemeClassNames.page.docsDocPage)}>
      <DocsSidebarProvider name={sidebarName} items={sidebarItems}>
        <DocRootLayout>{docElement}</DocRootLayout>
      </DocsSidebarProvider>
    </HtmlClassNameProvider>
  );
}
