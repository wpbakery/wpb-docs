---
id: wpbakery-page-builder-settings
title: WPBakery Page Builder settings
description: Learn how to configure WPBakery Page Builder settings, manage user access, customize design defaults and add custom CSS or JavaScript.
keywords: [WPBakery page builder settings]
sidebar_label: WPBakery Page Builder settings
sidebar_position: 9
hide_table_of_contents: true
---

Open **WordPress Dashboard → WPBakery Page Builder** to access the plugin settings. From here, you can configure general options, manage editor permissions, customize default styles, add site-wide CSS or JavaScript and activate your license.

## General Settings

General Settings of WPBakery Page Builder allows control of the following configuration:

- Global responsive content: Disable or Enable responsive settings. Check this checkbox to prevent content elements from "stacking" one on top other (on small media screens, eg. mobile);
- Google Fonts subsets: Include or exclude Google Fonts subsets available in WPBakery Page Builder. **Note:** It is recommended to use subsets only if they are required for your content;
- Guide Tour: Reset WPBakery Page Builder introduction Guide Tour.

<div style={{textAlign: 'center'}}>
  <iframe style={{maxWidth: '700px', width: '100%'}} height="450" src="https://www.youtube.com/embed/YCbPnu9Y0U8?feature=oembed&modestbranding=1&showinfo=0&rel=0" title="How to Control Responsiveness with WPBakery Page Builder for WordPress" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Role Manager

Control user group role access to the features and options of WPBakery Page Builder – manage WordPress default and custom roles. Each user group has following access controls:

- Post types: Enable WPBakery Page Builder for pages, posts and custom post types. Note: By default WPBakery Page Builder is available for pages only;
- Backend editor: Enable/Disable Backend editor, set it as default and disable Classic editor;
- Frontend editor: Enable/Disable Frontend editor;
- Page settings: Control access to WPBakery Page Builder page settings. Note: Disable page settings to restrict editing of Custom CSS through page;
- Settings options: Control access rights to WPBakery Page Builder admin settings tabs (e.g. General Settings, Shortcode Mapper, …);
- Templates: Control access rights to templates and predefined templates. Note: "Apply templates only" restricts users from saving new templates and deleting existing;
- Elements: Control user access to content elements;
- Grid Builder: Control user access to Grid Builder and Grid Builder Elements;
- Element Presets: Control access rights to element presets in element edit form. Note: "Apply presets only" restricts users from saving new presets, deleting existing and setting defaults;
- Drag and Drop: Control access rights to drag and drop functionality for a certain user role.

**Note:** In WordPress Multisite SuperAdmin has all access rights enabled without option to disable them.

<div style={{textAlign: 'center'}}>
  <iframe style={{maxWidth: '700px', width: '100%'}} height="450" src="https://www.youtube.com/embed/HiO_ksIK-kk?feature=oembed&modestbranding=1&showinfo=0&rel=0" title="How To Control User Group Access with WPBakery Page Builder Role Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Design Options

Design Options allows you to customize the default appearance of WPBakery Page Builder content elements.

Starting from version 9.2, you can also customize responsive breakpoints in **WP Dashboard → WPBakery Page Builder → Design Options**. These breakpoints define the transitions between Desktop, Tablet horizontal, Tablet vertical, Mobile horizontal, and Mobile vertical device views. They are used by the device switches in both the Frontend and Backend editors.

To change the breakpoints, adjust the **Desktop breakpoint**, **Tablet horizontal breakpoint**, **Tablet vertical breakpoint**, and **Mobile horizontal breakpoint** values, then click **Save Changes**.

For details about device views and device-specific controls, see [Responsive settings](/docs/building-with-wpbakery/responsive-settings).

## Custom CSS

If you want to add some custom CSS code to the plugin and don't want to modify any files, then it's a good place to enter your code at this field.

**Important:** WPBakery Page Builder offers several ways for you to add Custom CSS. Please visit [Custom CSS section](/docs/building-with-wpbakery/custom-css) for more information.

## Custom JS

You can add global JS using the Custom JS tab. Javascript can be added inside the &lt;head&gt; tag or before the end of the &lt;body&gt; tag.

## Product License

Activate WPBakery Page Builder license to receive all benefits:

- Direct update option;
- Access to official support;
- Ability to use WPBakery Page Builder with any theme (not only the one which has WPBakery Page Builder included).

Read more about [Product License activation](/docs/getting-started/activation).

## Shortcode Mapper

Add 3rd party shortcodes to WPBakery Page Builder by converting them to elements. Read more about [Shortcode Mapper usage](/docs/features-and-tools/shortcode-mapper).
