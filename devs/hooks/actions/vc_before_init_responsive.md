---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_before_init_responsive

Fires before the responsive component is initialized. This hook runs inside the `Vc_Manager::responsive()` method, the first time the responsive services are requested, before the `WPB_Responsive` instance is created. Available since version 9.1.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_before_init_responsive', 'wpb_before_responsive_init' );

function wpb_before_responsive_init() {
    // Run custom logic before the responsive services (breakpoints, devices, params, hide) are created
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
