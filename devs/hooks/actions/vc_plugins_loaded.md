---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_plugins_loaded

Fires when WPBakery Page Builder has finished loading during the WordPress `plugins_loaded` hook. Use this hook to run code that depends on WPBakery being fully loaded but before WordPress `init`.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_plugins_loaded', 'wpb_on_vc_loaded' );

function wpb_on_vc_loaded() {
    // WPBakery is loaded - safe to use its functions
    // Register custom element mappings or extend functionality
    if ( function_exists( 'vc_map' ) ) {
        // Queue custom element registrations
    }
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
