---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_after_init_responsive

Fires after the responsive component has been initialized. This hook runs inside the `Vc_Manager::responsive()` method, after the `WPB_Responsive` instance has been created and stored in the factory. Available since version 9.1.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_after_init_responsive', 'wpb_after_responsive_init' );

function wpb_after_responsive_init() {
    // Run custom logic once the responsive services (breakpoints, devices, params, hide) are ready
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
