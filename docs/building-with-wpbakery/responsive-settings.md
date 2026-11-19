---
id: responsive-settings
title: Responsive settings
sidebar_label: Responsive settings
sidebar_position: 4
hide_table_of_contents: true
keywords: [WPBakery responsive settings]
description: Learn how to configure WPBakery responsive settings to adjust column layouts, set device-specific styles, hide elements and customize breakpoints.
---

WPBakery Page Builder automatically adapts page layouts to different screen sizes. Use responsive settings to adjust column width, offset and visibility.

## Column layouts

Open the column edit window and select **Width & Responsiveness** to adjust column width, offset and visibility for different devices. Use the default column values or change the settings for a particular device. Columns can also be hidden on selected device types.

You can also apply these responsive settings to inner columns.

## Device views

WPBakery Page Builder supports five device views:

- Desktop
- Tablet horizontal
- Tablet vertical
- Mobile horizontal
- Mobile vertical

Select a view using the device switch in the Frontend or Backend Editor navigation bar.

In the Backend Editor, the schematic layout changes to reflect responsive stacking. The device selector in element settings stays synchronized with the device switch in the navigation bar.

import ZoomImage from '@site/src/components/ZoomImage';

<ZoomImage src="/img/screenshots/responsive-settings-device-views.png" alt="The Backend Editor device switch showing Desktop, tablet and mobile views" />

## Device-specific Design Options

Supported attributes in an element’s **Design Options** tab display a device icon. Use this control to set a value for a selected device.

1. Open the element edit window.
2. Select the **Design Options** tab.
3. Click the device icon next to a supported attribute.
4. Select a device and enter its value.
5. Click **Save changes**.

Desktop values apply across devices by default. A value set for a specific device replaces the inherited desktop value for that device.

<ZoomImage src="/img/screenshots/responsive-settings-device-specific-options.png" alt="The Design Options tab with a device selector for responsive values" />

## Hide elements on a device

Use **Hide element** in the **Design Options** tab to hide an element on a selected device.

1. In the **Design Options** tab, click the device selector next to **Hide element**.
2. Select the device where you want to hide the element.
3. Turn on **Hide element** and click **Save changes**.

**Note:** When you enable **Hide element** for a specific device, the setting automatically applies to all smaller devices. To change this behavior for a smaller device, switch to that device using the device selector and adjust the **Hide element** setting individually.

## Restore automatic responsiveness

To remove an element’s device-specific customizations:

1. Open the element edit window.
2. Open the menu at the top of the window.
3. Select **Restore auto responsiveness**.

This clears the selected element’s responsive overrides and returns all device views to its desktop values.

<ZoomImage src="/img/screenshots/responsive-settings-restore-auto-responsiveness.png" alt="The element settings menu with Restore auto responsiveness selected" />

## Custom breakpoints

Responsive breakpoints define the transitions between device views. You can customize these values in the WPBakery admin dashboard.

1. Go to **WP Dashboard → WPBakery Page Builder → Design Options**.
2. Adjust the Desktop breakpoint, Tablet horizontal breakpoint, Tablet vertical breakpoint and Mobile horizontal breakpoint values.
3. Click **Save Changes**.

These breakpoints are used by the device switches in both editors.

**Note:** The values shown in the screenshot are examples and can be changed.

<ZoomImage src="/img/screenshots/responsive-settings-custom-breakpoints.png" alt="WPBakery Design Options settings showing the responsive breakpoint fields" />

<div style={{textAlign: 'center'}}>
  <iframe style={{maxWidth: '800px', width: '100%'}} height="450" src="https://www.youtube.com/embed/r66uCgEkv0M?feature=oembed&modestbranding=1&showinfo=0&rel=0" title="A walkthrough through the WPBakery responsive settings" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

For more information, see [Element design options](/docs/building-with-wpbakery/element-design-options) and [WPBakery Page Builder settings](/docs/building-with-wpbakery/wpbakery-page-builder-settings).

<p>Device-specific Design Options, Hide element, Restore default responsiveness, custom breakpoints, and device switching in the Backend Editor are available starting with WPBakery Page Builder 9.2.</p>
