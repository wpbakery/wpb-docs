import React from 'react';
import Footer from '@theme-original/Footer';
import {useLocation} from '@docusaurus/router';

export default function FooterWrapper(props) {
  const {pathname} = useLocation();
  if (pathname.startsWith('/docs') || pathname.startsWith('/devs')) {
    return null;
  }
  return <Footer {...props} />;
}
