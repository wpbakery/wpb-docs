---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_after_init

Fires after WPBakery Page Builder has fully completed its initialization sequence. This hook runs at the very end of the `Vc_Manager::init()` method, after the mode has been set, all components have been loaded, shortcodes have been mapped, and modifications have been applied. This is the recommended hook for code that depends on the complete WPBakery environment being available.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_after_init', 'wpb_after_full_init' );

function wpb_after_full_init() {
    // All WPBakery components are now available
    // Safe to use vc_map(), modify shortcode params, etc.
    vc_add_param( 'vc_row', [
        'type' => 'textfield',
        'heading' => 'Custom Attribute',
        'param_name' => 'my_custom_attr',
    ] );
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
