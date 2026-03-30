---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_after_init_updater

Fires after the updater component has been initialized. This hook runs inside the `Vc_Manager::updater()` method, after the `Vc_Updater` and `Vc_Updating_Manager` instances have been created and configured.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_after_init_updater', 'wpb_after_updater_init' );

function wpb_after_updater_init() {
    // Run custom logic after the updater is ready
    // e.g., hook into the update checking process
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
