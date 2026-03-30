---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_wpbakeryshortcode_single_param_html_holder_value

Filters the parameter value used when rendering a single param HTML holder in the backend editor. This allows overriding the displayed value for any shortcode parameter before it is rendered in the editor UI.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value` | string | The current parameter value. |
| `$param` | array | The parameter configuration array (includes `type`, `param_name`, etc.). |
| `$settings` | array | The shortcode settings array. |
| `$atts` | array | The shortcode attributes. |

## Usage

```php
<?php
add_filter( 'vc_wpbakeryshortcode_single_param_html_holder_value', 'my_custom_param_holder_value', 10, 4 );

function my_custom_param_holder_value( $value, $param, $settings, $atts ) {
    // Override the displayed value for a specific param type
    if ( 'my_custom_type' === $param['type'] ) {
        $value = 'Custom display value';
    }
    return $value;
}
```

## Source

File: `include/classes/shortcodes/core/class-wpbakeryshortcode.php`
