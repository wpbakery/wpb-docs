---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_form_fields_render_field\_\{base\}\_\{param_name\}\_param

Dynamic filters that allow modification of a specific parameter's configuration or value when rendering the element edit form. Two variants exist:

- **`vc_form_fields_render_field_{base}_{param_name}_param`** — Filters the parameter settings array.
- **`vc_form_fields_render_field_{base}_{param_name}_param_value`** — Filters the parameter value.

In both filter names, `{base}` is the element's shortcode tag (e.g., `vc_column_text`) and `{param_name}` is the parameter name (e.g., `content`).

## Parameters

### \_param variant

| Parameter | Type | Description |
|-----------|------|-------------|
| `$param` | `array` | The parameter settings array (type, heading, param_name, value, description, etc.). |
| `$value` | `mixed` | The current value of the parameter. |
| `$settings` | `array` | The full element settings array. |
| `$atts` | `array` | The current shortcode attributes. |

### \_param_value variant

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value` | `mixed` | The current value of the parameter. |
| `$param` | `array` | The parameter settings array. |
| `$settings` | `array` | The full element settings array. |
| `$atts` | `array` | The current shortcode attributes. |

## Usage

```php
// Modify a specific parameter's settings for vc_column_text
add_filter( 'vc_form_fields_render_field_vc_column_text_content_param', 'wpb_modify_content_param', 10, 4 );

function wpb_modify_content_param( $param, $value, $settings, $atts ) {
    // Change the heading text for the content parameter
    $param['heading'] = 'Custom Content';
    return $param;
}

// Modify the value of a specific parameter
add_filter( 'vc_form_fields_render_field_vc_column_text_content_param_value', 'wpb_modify_content_value', 10, 4 );

function wpb_modify_content_value( $value, $param, $settings, $atts ) {
    // Set a default value if empty
    if ( empty( $value ) ) {
        $value = 'Default content here.';
    }
    return $value;
}
```

## Source

File: `include/classes/editors/class-vc-edit-form-fields.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
