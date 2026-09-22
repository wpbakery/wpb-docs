---
id: wpbakery-full-width-full-height-row
title: How to Create Full-Width and Full-Height Rows in WPBakery
sidebar_label: How to Create Full-Width and Full-Height Rows in WPBakery
sidebar_position: 26
hide_table_of_contents: true
slug: /docs/rows-columns/wpbakery-full-width-full-height-row/
---

## How to Create Full-Width and Full-Height Rows in WPBakery

WPBakery Page Builder includes separate settings for creating full-width and full-height rows. Use Row stretch to extend a row horizontally and Full height row to extend it vertically to the height of the browser window.

## How to create a full-width row

Edit the row and locate the **Row stretch** setting. Choose one of the following options:

- **Default** – Keeps the row and its content within the width defined by the WordPress theme.
- **Stretch row** – Stretches the row to full width while keeping its content within the original content width.
- **Stretch row and content** – Stretches both the row and its content while preserving the default 15-pixel padding on the left and right.
- **Stretch row and content without spaces** – Stretches the row and its content across the full width and removes the default 15-pixel side padding.

The Row stretch setting has been available since WPBakery Page Builder 4.4.

Watch the full-with row tutorial:

<div style={{textAlign: 'center'}}>
  <iframe style={{maxWidth: '700px', width: '100%'}} height="450" src="https://www.youtube.com/embed/aU3f2-Sgzto?feature=oembed&modestbranding=1&showinfo=0&rel=0" title="Full Width Row" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

**Note:** **Note:** Full-width row stretching may not work correctly when the WordPress theme applies *overflow: hidden* to a parent element containing the row.


## How to create a full-height row

Edit the row and enable **Full height row**. The row will expand vertically according to the height of the browser viewport.

You can also control the vertical position of the content inside the row by placing it at the **top** or in the **middle**.

The **Full height row** setting has been available since WPBakery Page Builder 4.7.

**Note:** When a full-height row is visible during the initial page load, WPBakery accounts for the page content and header positioned above it. The row fills the remaining visible area of the viewport. Full-height rows located farther down the page use the full height of the browser viewport.