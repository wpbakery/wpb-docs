---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_before_init_config

Fires before the config component is initialized. This hook runs before the `Wpb_Config_Lib` class is instantiated, allowing you to modify configuration behavior or register custom config handlers.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_before_init_config', 'wpb_before_config_init' );

function wpb_before_config_init() {
    // Run custom logic before the config library is created
    // e.g., define custom configuration constants
    if ( ! defined( 'MY_CUSTOM_CONFIG' ) ) {
        define( 'MY_CUSTOM_CONFIG', true );
    }
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
