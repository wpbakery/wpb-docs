---
id: change-shortcodes-html-output
title: Change Shortcode’s HTML Output
sidebar_label: Change Shortcode’s HTML Output
sidebar_position: 13
hide_table_of_contents: true
slug: /developers-how-tos/change-shortcodes-html-output
---

# Change Shortcode’s HTML Output

SINCE 3.6.5
If you are looking for a way to change HTML markup that is outputted by WPBakery Page Builder for a certain shortcode, below you will find few examples how you can achieve that.

Override HTML for built in Content elements
Lets say you want “Separator with text” element to have different html markup in your WordPress theme.

Copy js_composer/include/templates/shortcodes/vc_text_separator.php file and place it in your theme’s folder /vc_templates/vc_text_separator.php Now open that file and change, replace, remove anything from it.

WPBakery Page Builder will use this file for front end html output now.

Simple as that.

In other words, you should place file in vc_templates folder with shortcode base used as a file name.

Then WPBakery Page Builder will use it instead.

Important: Please note that your template file should echo html markup instead of “returning” it.

Looking for a way to change “vc_templates” directory to your own?
