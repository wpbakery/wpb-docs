---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_after_init_settings

Fires after the settings manager has been initialized. This hook runs inside the `Vc_Manager::settings()` method, after the `Vc_Settings` instance has been created and stored in the factory.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_after_init_settings', 'wpb_after_settings_init' );

function wpb_after_settings_init() {
    // Run custom logic after the settings manager is ready
    // e.g., register custom settings tabs or fields
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
