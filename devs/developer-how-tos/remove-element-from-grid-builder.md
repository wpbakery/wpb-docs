---
id: remove-element-from-grid-builder
title: Remove Content Element from Grid Builder
sidebar_label: Remove Content Element from Grid Builder
sidebar_position: 22
hide_table_of_contents: true
slug: /developers-how-tos/remove-content-element-from-grid-builder
---

# Remove Content Element from Grid Builder

To remove content elements from Grid Builder it is necessary to add the following function to the `functions.php` of your WordPress theme.

## Remove WooCommerce from "Add Element" List

```php
<?php

function vc_remove_shortcodes_from_vc_grid_element( $shortcodes ) {
 unset( $shortcodes['vc_gitem_acf'] );
 return $shortcodes;
}
// using wp filter hook to remove shortcodes from the list;
add_filter( 'vc_grid_item_shortcodes', 'vc_remove_shortcodes_from_vc_grid_element', 100 );
```
