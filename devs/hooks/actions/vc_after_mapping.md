---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_after\_mapping

Fires after all default shortcodes have been mapped. This hook runs inside the `Vc_Manager::init()` method, after `Vc_Mapper::init()` has executed and all built-in shortcode definitions have been registered. This is a good place to modify existing shortcode mappings or add new shortcode parameters.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_after_mapping', 'wpb_modify_shortcode_mappings' );

function wpb_modify_shortcode_mappings() {
    // Modify existing shortcode parameters after all defaults are mapped
    vc_add_param( 'vc_column', array(
        'type' => 'dropdown',
        'heading' => 'Custom Column Style',
        'param_name' => 'custom_style',
        'value' => array(
            'Default' => '',
            'Highlighted' => 'highlighted',
        ),
    ) );
}
```

## Source

File: `include/classes/core/class-vc-manager.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
