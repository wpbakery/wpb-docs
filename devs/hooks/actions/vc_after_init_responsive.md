---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_after_init_responsive

***Since 9.2***

Fires after the responsive services have been initialized. This hook runs inside the `Vc_Manager::responsive()` method, after the `Wpb_Responsive` instance has been created and stored in the factory. Use `wpb_responsive()` to access the breakpoints, devices, per device params and hide services.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_after_init_responsive', 'my_after_responsive_init' );

function my_after_responsive_init() {
    // Breakpoints in px keyed by device: sm, md, lg, xl.
    $breakpoints = wpb_responsive()->breakpoints()->get_all();
    define( 'MY_THEME_TABLET_BREAKPOINT', $breakpoints['md'] );
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
