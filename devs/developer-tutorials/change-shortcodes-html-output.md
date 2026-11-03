---
id: change-shortcodes-html-output
title: Change shortcode’s HTML output
sidebar_label: Change shortcode’s HTML output
sidebar_position: 13
hide_table_of_contents: true
slug: /developer-tutorials/change-shortcodes-html-output
---

# Change shortcode’s HTML output

SINCE 3.6.5
If you are looking for a way to change HTML markup that is outputted by WPBakery Page Builder for a certain shortcode, below you will find few examples how you can achieve that.

Override HTML for built in Content elements
Lets say you want “Separator with text” element to have different html markup in your WordPress theme.

Copy js_composer/include/templates/shortcodes/vc_text_separator.php file and place it in your theme’s folder /vc_templates/vc_text_separator.php Now open that file and change, replace, remove anything from it.

WPBakery Page Builder will use this file for front end html output now.

Simple as that.

In other words, you should place file in vc_templates folder with shortcode base used as a file name.

Then WPBakery Page Builder will use it instead.

Important: Please note that your template file should echo html markup instead of “returning” it.

Looking for a way to change “vc_templates” directory to your own? Use [`vc_set_shortcodes_templates_dir()`](/devs/inner-api/vc_set_shortcodes_templates_dir).

## Fixing outdated template overrides

A side effect of overriding templates in your theme is that WPBakery Page Builder core templates will update, but your custom overrides will not. We sometimes change the default templates in new releases, and each time we do, we increase the `@version` tag in the template file header. Keeping overridden templates up to date is the responsibility of the theme or plugin that overrides them.

If an overridden template is older than the default one, or has no `@version` tag at all, WPBakery Page Builder adds a deprecation notice to the *debug.log* file (when `WP_DEBUG` and `WP_DEBUG_LOG` are enabled), for example:

```
PHP Deprecated:  Your theme "Twenty Twenty-Five" template override for WPBakery template "vc_row.php" is outdated (version not set) compared to the default (version 9.1). Contact theme author update it to avoid compatibility issues.
```

If you see such a notice, bring the overridden template in line with the default one:

1. Back up the outdated template from your theme's *vc_templates* folder.
2. Copy the default template from *js_composer/include/templates/shortcodes/* into your theme's *vc_templates* folder.
3. Reapply your customizations to the new file. Keep its `@version` tag, so it matches the default template.

If you use a third-party theme, contact the theme author and ask them to update the template.
