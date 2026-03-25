---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_single_param_edit_holder_output

Filters the complete HTML output of a single parameter edit holder in the shortcode settings panel.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The HTML output of the parameter edit holder. |
| `$param` | array | The parameter configuration array. |
| `$value` | mixed | The current value of the parameter. |
| `$settings` | array | The shortcode settings as registered via `vc_map()`. |
| `$atts` | array | The current shortcode attributes. |

## Usage

```php
<?php
add_filter( 'vc_single_param_edit_holder_output', 'my_modify_param_holder_output', 10, 5 );

function my_modify_param_holder_output( $output, $param, $value, $settings, $atts ) {
    // Append a help text after specific parameter types.
    if ( 'textfield' === $param['type'] && 'title' === $param['param_name'] ) {
        $output .= '<p class="my-help-text">Enter a descriptive title.</p>';
    }

    return $output;
}
```

## Source

File: `include/classes/editors/class-vc-edit-form-fields.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
