---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_before_init_modules

Fires before the modules component is initialized. This hook runs before the `Vc_Modules_Manager` class is instantiated, allowing you to set up dependencies or run custom logic before feature modules are loaded.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_before_init_modules', 'wpb_before_modules_init' );

function wpb_before_modules_init() {
    // Run custom logic before the modules manager is created
    // e.g., register custom module paths
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
