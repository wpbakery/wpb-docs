import React from 'react';
import PromoBanner from '@site/src/components/PromoBanner';

// Wraps every page, so the promo banner is shown site-wide.
export default function Root({children}) {
  return (
    <>
      <PromoBanner />
      {children}
    </>
  );
}
