---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_before\_init\_settings

Fires before the settings component is initialized. This hook runs before the `Vc_Settings` class is instantiated, allowing you to set up custom settings or modify behavior before the settings system is created.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_before_init_settings', 'wpb_before_settings_init' );

function wpb_before_settings_init() {
    // Run custom logic before the settings component is created
    // e.g., define default option values
    if ( false === get_option( 'my_wpb_custom_option' ) ) {
        update_option( 'my_wpb_custom_option', 'default_value' );
    }
}
```

## Source

File: `include/classes/core/class-vc-manager.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
