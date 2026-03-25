import React from 'react';
import clsx from 'clsx';
import {PageMetadata, HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {DocsSidebarProvider} from '@docusaurus/plugin-content-docs/client';
import Layout from '@theme/Layout';
import DocRootLayout from '@theme/DocRoot/Layout';
import NotFoundContent from '@theme/NotFound/Content';
import docsSidebarItems from '@site/src/theme/DocRoot/docsSidebarItems.json';

export default function NotFound() {
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
        <DocsSidebarProvider name="tutorialSidebar" items={docsSidebarItems}>
          <DocRootLayout>
            <NotFoundContent />
          </DocRootLayout>
        </DocsSidebarProvider>
      </Layout>
    </HtmlClassNameProvider>
  );
}
