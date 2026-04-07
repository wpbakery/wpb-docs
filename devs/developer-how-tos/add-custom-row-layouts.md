---
id: add-custom-row-layouts
title: Add Custom Row Layouts (Presets)
sidebar_label: Add Custom Row Layouts (Presets)
sidebar_position: 7
hide_table_of_contents: true
slug: /developers-how-tos/add-custom-row-layouts-presets
---

# Add Custom Row Layouts (Presets)

WPBakery Page Builder comes with a set of predefined row layouts (most popular variations), this helps you or other users easily switch between available column layouts within a row. To add more layouts you should modify global array `$vc_row_layouts` on `vc_after_init_base` action.

```php
<?php
add_action( 'vc_after_init_base', 'add_more_custom_layouts' );
function add_more_custom_layouts() {
 global $vc_row_layouts;
 array_push( $vc_row_layouts, [
 'cells' => '16_16_16_12',
 'mask' => '424',
 'title' => 'Custom 1/6 + 1/6 + 1/6 + 1/2',
 'icon_class' => 'l_16_16_16_12' ],
 );
}
```

## How to count mask?

mask = column count . sum of all numbers. Example: layout 12_12 mask = (column count 2) . (1+2+1+2=6) = 26
