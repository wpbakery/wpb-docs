---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_edit_form_fields_render_field\_\{type\}\_before

Filters the HTML output rendered **before** a parameter field of a specific type in the WPBakery element edit form. A companion filter `vc_edit_form_fields_render_field_{type}_after` filters the HTML rendered **after** the field. Both are dynamic filters where `{type}` is the parameter type (e.g., `textfield`, `dropdown`, `textarea_html`).

## Parameters

### \_before variant

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | `string` | The accumulated HTML output rendered before the parameter field input. |

### \_after variant

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output_after` | `string` | The HTML output rendered after the parameter field input (closing divs). |

## Usage

```php
// Add custom markup before all textfield params
add_filter( 'vc_edit_form_fields_render_field_textfield_before', 'wpb_custom_before_textfield' );

function wpb_custom_before_textfield( $output ) {
    $output .= '<div class="my-custom-wrapper">';
    return $output;
}

// Add custom markup after all textfield params
add_filter( 'vc_edit_form_fields_render_field_textfield_after', 'wpb_custom_after_textfield' );

function wpb_custom_after_textfield( $output_after ) {
    $output_after = '</div>' . $output_after;
    return $output_after;
}
```

## Source

File: `include/classes/editors/class-vc-edit-form-fields.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
