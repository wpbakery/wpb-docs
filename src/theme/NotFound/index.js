import React from 'react';
import clsx from 'clsx';
import {PageMetadata, HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {DocsSidebarProvider} from '@docusaurus/plugin-content-docs/client';
import {usePluginData} from '@docusaurus/useGlobalData';
import {useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';
import DocRootLayout from '@theme/DocRoot/Layout';
import NotFoundContent from '@theme/NotFound/Content';

export default function NotFound() {
  const {pathname} = useLocation();
  const {sidebars} = usePluginData('sidebar-global-data');
  const sidebarName = pathname.startsWith('/devs') ? 'devsSidebar' : 'tutorialSidebar';
  const sidebarItems = sidebars[sidebarName] ?? [];

  return (
    <HtmlClassNameProvider
      className={clsx(
        'docs-wrapper',
        'plugin-docs',
        'plugin-id-default',
        ThemeClassNames.page.docsDocPage,
      )}>
      <PageMetadata title="Page Not Found" />
      <Layout>
        <DocsSidebarProvider name={sidebarName} items={sidebarItems}>
          <DocRootLayout>
            <NotFoundContent />
          </DocRootLayout>
        </DocsSidebarProvider>
      </Layout>
    </HtmlClassNameProvider>
  );
}
