import React from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {
  DocsSidebarProvider,
  useDocRootMetadata,
  useDocsVersion,
} from '@docusaurus/plugin-content-docs/client';
import DocRootLayout from '@theme/DocRoot/Layout';
import NotFoundContent from '@theme/NotFound/Content';
import {useLocation} from '@docusaurus/router';

function DocRootNotFound() {
  const {pathname} = useLocation();
  const {docsSidebars} = useDocsVersion();
  const sidebarName = pathname.startsWith('/devs') ? 'devsSidebar' : 'tutorialSidebar';

  return (
    <HtmlClassNameProvider className={clsx(ThemeClassNames.page.docsDocPage)}>
      <DocsSidebarProvider name={sidebarName} items={docsSidebars[sidebarName] ?? []}>
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
