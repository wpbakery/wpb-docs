---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_after_init_modules

Fires after the modules manager has been initialized. This hook runs inside the `Vc_Manager::modules()` method, after the `Vc_Modules_Manager` instance has been created and stored in the factory.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_after_init_modules', 'wpb_after_modules_init' );

function wpb_after_modules_init() {
    // Run custom logic after the modules manager is ready
    // e.g., interact with the modules system
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
