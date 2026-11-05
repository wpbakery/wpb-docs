---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_before_init_responsive

Fires before the responsive services are initialized. This hook runs inside the `Vc_Manager::responsive()` method, before the `Wpb_Responsive` instance is created and stored in the factory. Available since version 9.2.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_before_init_responsive', 'my_before_responsive_init' );

function my_before_responsive_init() {
    // Runs once per request, before the breakpoints, devices and per device params are set up.
    // Do not call wpb_responsive() here, the services do not exist yet.
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
