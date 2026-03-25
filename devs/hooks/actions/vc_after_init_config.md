---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_after\_init\_config

Fires after the configuration library has been initialized. This hook runs inside the `Vc_Manager::config()` method, after the `Wpb_Config_Lib` instance has been created and stored in the factory.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_after_init_config', 'wpb_after_config_init' );

function wpb_after_config_init() {
    // Run custom logic after the config library is ready
    // e.g., modify editor configuration values
}
```

## Source

File: `include/classes/core/class-vc-manager.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
