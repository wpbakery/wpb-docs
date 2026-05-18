import React from 'react';
import Main from '@theme-original/DocRoot/Layout/Main';
import {useThemeConfig} from '@docusaurus/theme-common';

export default function MainWrapper(props) {
  const {footer} = useThemeConfig();
  const copyright = footer?.copyright;

  return (
    <div className="wpb-docs-main-wrapper">
      <Main {...props} />
      {copyright && (
        <div className="wpb-docs-footer">
          <div
            className="wpb-docs-footer__copyright"
            dangerouslySetInnerHTML={{__html: copyright}}
          />
        </div>
      )}
    </div>
  );
}
