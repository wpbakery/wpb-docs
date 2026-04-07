---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_before_init_license

Fires before the license component is initialized. This hook runs before the `Vc_License` class is instantiated, allowing you to run custom logic related to licensing before the license system is set up.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_before_init_license', 'wpb_before_license_init' );

function wpb_before_license_init() {
    // Run custom logic before the license component is created
    // e.g., set up custom license validation
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
