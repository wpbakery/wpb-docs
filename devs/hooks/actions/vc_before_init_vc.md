---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_before_init_vc

Fires before the main VC instance is initialized. This hook runs before the `Vc_Base` class is instantiated and configured with its template editor and shared templates dependencies.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_before_init_vc', 'wpb_before_vc_init' );

function wpb_before_vc_init() {
    // Run custom logic before the main VC instance is created
    // e.g., register custom shortcode classes
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
