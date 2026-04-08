---
id: remove-edit-from-admin-bar
title: Remove "Edit with WPBakery Page Builder" from WordPress admin bar
sidebar_label: Remove "Edit with WPBakery Page Builder" from WordPress admin bar
sidebar_position: 21
hide_table_of_contents: true
slug: /developers-how-tos/remove-edit-with-wpbakery-page-builder-from-wordpress-admin-bar
---

# Remove "Edit with WPBakery Page Builder" from WordPress admin bar

You can remove "Edit with WPBakery Page Builder" option from your WordPress admin bar by adding following code to your WordPress theme's *functions.php* file.

```php
<?php
function vc_remove_wp_admin_bar_button() {
 remove_action( 'admin_bar_menu', [ vc_frontend_editor(), 'adminBarEditLink' ], 1000 );
}
add_action( 'vc_after_init', 'vc_remove_wp_admin_bar_button' );
```

## To completely remove "Edit with WPBakery Page Builder" link

You can remove "Edit with WPBakery Page Builder" link from all WordPress pages and in admin by adding following code to your WordPress theme's *functions.php* file.

```php
<?php
function vc_remove_frontend_links() {
 vc_disable_frontend(); // this will disable frontend editor
}
add_action( 'vc_after_init', 'vc_remove_frontend_links' );
```
