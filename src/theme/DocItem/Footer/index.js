import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import StillStuck from '@site/src/components/StillStuck';

export default function FooterWrapper(props) {
  return (
    <>
      <StillStuck />
      <Footer {...props} />
    </>
  );
}
