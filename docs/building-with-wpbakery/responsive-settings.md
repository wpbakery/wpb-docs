---
id: responsive-settings
title: Responsive settings
sidebar_label: Responsive settings
sidebar_position: 4
hide_table_of_contents: true
---

***Since 9.1***

Starting from version 9.1 WPBakery Page Builder allows you to set styles for each device separately, hide elements on selected devices and change the screen width where each device view starts.

## Device views

| Device | Screen width (default) | Editor preview (default) |
|-------------------|------------------------|--------------------------|
| Desktop | From 1200px | Full width |
| Tablet horizontal | Up to 1200px | 1024px |
| Tablet vertical | Up to 1024px | 768px |
| Mobile horizontal | Up to 768px | 640px |
| Mobile vertical | Up to 640px | 480px |

Screen widths and preview sizes are set by the [breakpoints](#breakpoints) in Design Options: each device view starts at its breakpoint, ends at the next one and the Frontend editor previews it at its breakpoint width. Mobile vertical covers everything below the mobile horizontal breakpoint and is previewed at 480px, or narrower when that breakpoint is lower.

Device views do not cascade: value set for Tablet vertical is applied to tablet vertical screens only, not to the smaller devices.

## Breakpoints

The screen width where each device view starts can be changed in WP Dashboard -> WPBakery Page Builder -> Design Options tab:

- Desktop breakpoint (1200px by default);
- Tablet horizontal breakpoint (1024px by default);
- Tablet vertical breakpoint (768px by default);
- Mobile horizontal breakpoint (640px by default).

Once saved, the device dropdown in both editors shows the new screen widths and the Frontend editor previews each device at its new width.

**Note:** values must increase from mobile horizontal to desktop. Invalid value is rejected on save and the previous one is kept.

Column widths follow new breakpoints after saving the Design Options tab with "Use custom design options" enabled. Breakpoints changed in earlier versions are kept.

## Editing per device

The device dropdown in the navigation bar of both editors holds "Apply styles only for selected device type" toggle in its last row:

- Enabled - values you change in element edit window are applied to the device selected in the dropdown only;
- Disabled - values are applied to all devices and device-specific changes are ignored.

<!-- TODO screenshot: navbar device dropdown with the device list and the scope toggle -->

A badge on the device icon in the navigation bar shows that the toggle is enabled.

Device-specific values are available for Design Options and CSS animation. While the toggle is enabled, a device icon appears next to each such option. CSS animation left empty for a device uses the value set for all devices. A device's Design Options start as a copy of the values set for all devices; changing them with the toggle disabled removes the device copies.

**Note:** the toggle state is saved together with the page and device-specific values are applied on your site only while it is enabled. The dropdown is not available when "Disable responsive content elements" is checked in General Settings.

## Hide element

"Hide element" toggle at the top of the Design Options tab hides the element on the selected device. With "Apply styles only for selected device type" disabled it hides the element on all devices. Element hidden on all devices is not displayed on your site at all. In the editors hidden elements remain visible but dimmed.

<!-- TODO screenshot: element hidden on one device, dimmed in the Frontend editor -->

**Note:** "Hide row" and "Hide section" toggles and column hide checkboxes are replaced with "Hide element" toggle. Existing pages keep working, old values are displayed as "Hide element" setting when you open the element edit window and converted when you save the page.

## Column width and offset

Column width and offset are still set per device in the column edit window under "Width & Responsiveness" tab. To hide a column use "Hide element" toggle in the column Design Options tab.
