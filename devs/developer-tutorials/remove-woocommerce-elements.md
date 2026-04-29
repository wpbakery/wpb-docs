---
id: remove-woocommerce-elements
title: Remove WooCommerce mapped content elements
sidebar_label: Remove WooCommerce mapped content elements
sidebar_position: 23
hide_table_of_contents: true
slug: /developer-tutorials/remove-woocommerce-mapped-content-elements
---

# Remove WooCommerce mapped content elements

WooCommerce content elements "mapped" into WPBakery Page Builder interface using a different technique, we call it "Vendor scripts". As a result different approach should be used in order to remove them from available content elements list.

## Remove WooCommerce from "Add Element" List

```php
<?php
function your_name_vc_remove_woocommerce() {
 if ( is_plugin_active( 'woocommerce/woocommerce.php' ) ) {
 vc_remove_element( 'woocommerce_cart' );
 vc_remove_element( 'woocommerce_checkout' );
 vc_remove_element( 'woocommerce_order_tracking' );
 // Add other elements that should be removed here
 }
}
// Hook for admin editor.
add_action( 'vc_build_admin_page', 'your_name_vc_remove_woocommerce', 11 );
// Hook for frontend editor.
add_action( 'vc_load_shortcode', 'your_name_vc_remove_woocommerce', 11 );
```
