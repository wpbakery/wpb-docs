---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_before\_mapping

Fires before shortcode mapping begins. This is the recommended hook for registering custom elements with `vc_map()` or modifying existing element parameters with `vc_map_update()`. It fires after the frontend editor is initialized but before the mapper processes default shortcodes.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_before_mapping', 'wpb_register_custom_elements' );

function wpb_register_custom_elements() {
    vc_map( [
        'name' => 'My Custom Element',
        'base' => 'my_custom_element',
        'category' => 'Custom',
        'params' => [
            [
                'type' => 'textfield',
                'heading' => 'Title',
                'param_name' => 'title',
            ],
        ],
    ] );
}
```

## Source

File: `include/classes/core/class-vc-manager.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
