/**
 * Exposes the docs sidebars as global data.
 *
 * The global 404 page (`build/404.html`) is what a visitor actually gets when
 * they land on a dead `/docs/...` link, since unknown routes are never
 * prerendered. That page lives outside any docs route, so it has no sidebar
 * context of its own — this plugin hands it the real sidebars at build time,
 * so the 404 sidebar can never drift from the docs.
 */
const {toSidebarsProp} = require('@docusaurus/plugin-content-docs/lib/props.js');

module.exports = function sidebarGlobalDataPlugin() {
  return {
    name: 'sidebar-global-data',
    allContentLoaded({allContent, actions}) {
      const docsContent = allContent['docusaurus-plugin-content-docs'] ?? {};
      const sidebars = {};

      for (const pluginContent of Object.values(docsContent)) {
        for (const version of pluginContent?.loadedVersions ?? []) {
          Object.assign(sidebars, toSidebarsProp(version));
        }
      }

      actions.setGlobalData({sidebars});
    },
  };
};
