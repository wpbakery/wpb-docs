---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_after_init_license

Fires after the license manager has been initialized. This hook runs inside the `Vc_Manager::license()` method, after the `Vc_License` instance has been created and stored in the factory.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_after_init_license', 'wpb_after_license_init' );

function wpb_after_license_init() {
    // Run custom logic after the license manager is ready
    // e.g., check license status for your extension
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
