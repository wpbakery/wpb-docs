---
id: how-to-make-full-width-or-full-height-row
title: How to make full width or full height row?
sidebar_label: How to make full width or full height row?
sidebar_position: 26
hide_table_of_contents: true
slug: /wpbakery-page-builder-how-tos/how-to-make-full-width-or-full-height-row
---

## Full Width Row

Starting from version 4.4 row element of WPBakery Page Builder has been extended with "Row stretch" option which allows following states:

- Default
- Stretch row (Stretches row, but leave content in the previous width)
- Stretch row and content (Leaves default Bootstrap paddings of 15 pixels on the left and right side of row)
- Stretch row and content without spaces (Remove default Bootstrap padding of 15 pixels as well)

**Note:** If WordPress theme uses *overflow: hidden* in markup it may result in an inappropriate row stretching.

<div style={{textAlign: 'center'}}>
  <iframe style={{maxWidth: '700px', width: '100%'}} height="450" src="https://www.youtube.com/embed/aU3f2-Sgzto?feature=oembed&modestbranding=1&showinfo=0&rel=0" title="Full Width Row" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Full Height Row

***Since 4.7***

Starting from version 4.7 row element of WPBakery Page Builder has the option to set row full height – access row parameters and check "Yes" for Full Height Row. In addition, it is possible to control content position by placing content on Middle or Top of the full height row.

**Note:** if your row is in the viewport on initial page load the full height will stretch row until the end of the viewport screen as it will take into account content and header above it. All full height rows below initial viewport will be full height in terms of the browser screen.
