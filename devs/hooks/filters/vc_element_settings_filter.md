---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_element_settings_filter

Filters the settings array for a WPBakery element after it has been initialized from its configuration. This allows you to modify element settings such as parameters, name, description, icon, and other properties defined via `vc_map()`.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$settings` | `array` | The element settings array (params, name, description, icon, category, etc.). |
| `$tag` | `string` | The shortcode base tag of the element (e.g., `vc_column_text`). |

## Usage

```php
add_filter( 'vc_element_settings_filter', 'wpb_modify_element_settings', 10, 2 );

function wpb_modify_element_settings( $settings, $tag ) {
    if ( 'vc_column_text' === $tag ) {
        // Add a custom parameter to the column text element
        $settings['params'][] = [
            'type' => 'textfield',
            'heading' => 'Custom Field',
            'param_name' => 'custom_field',
        ];
    }
    return $settings;
}
```

## Source

File: `include/classes/core/class-wpb-map.php`
