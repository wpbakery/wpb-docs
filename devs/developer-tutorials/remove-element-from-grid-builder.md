---
id: remove-element-from-grid-builder
title: Remove content element from grid builder
sidebar_label: Remove content element from grid builder
sidebar_position: 22
hide_table_of_contents: true
slug: /developer-tutorials/remove-content-element-from-grid-builder
---

# Remove content element from grid builder

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
