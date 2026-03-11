---
id: fix-missing-content-area
sidebar_position: 43
hide_table_of_contents: true
slug: /faq/how-to-fix-this-page-can-not-be-edited-with-wpbakery-since-it-is-missing-a-wordpress-default-content-area
---

# How to fix “This page can not be edited with WPBakery since it is missing a WordPress default content area.”?

The WPBakery Page Builder relies on the default WordPress content area, typically provided by the the_content() function in the theme template.
If a theme or a third-party page builder overrides the default WordPress theme template and removes the default content area, then in such cases, you may encounter the following message in the page builder interface:

*This page can not be edited with WPBakery since it is missing a WordPress default content area.
*
In such cases, you can troubleshoot the issue by backing up your site and then deactivating the plugins one by one, while switching to a default theme like ‘Twenty Twenty-four,’ keeping WPBakery Page Builder active. This process will help in identifying if a particular plugin or theme is causing the issue.

Once the source is identified, you can contact the respective developer of the theme or plugin for guidance on how to prevent this issue.

If this doesn’t resolve the problem, there may be a server misconfiguration related to your permalink structure. To check, switch to the default ‘Plain’ permalink structure in Settings > Permalinks from the WordPress dashboard. If this resolves the issue, ensure that your .htaccess file has write access or investigate other server misconfigurations related to permalinks.
