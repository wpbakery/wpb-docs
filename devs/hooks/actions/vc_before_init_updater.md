---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_before_init_updater

Fires before the updater component is initialized. This hook runs before the `Vc_Updater` and `Vc_Updating_Manager` classes are instantiated, allowing you to modify update behavior or set up custom update sources.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_before_init_updater', 'wpb_before_updater_init' );

function wpb_before_updater_init() {
    // Run custom logic before the updater component is created
    // e.g., set up custom update server configuration
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
