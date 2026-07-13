---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_edit_form_fields_attributes_\{tag\}

Filters the shortcode attributes before they are used to populate the edit form fields. The dynamic portion of the hook name, `{tag}`, refers to the shortcode tag (e.g., `vc_column`, `vc_single_image`). This filter is useful for backward compatibility conversions or modifying attribute values before the edit form is rendered.

Fires when WPBakery opens the element edit form popup, just after the form attributes are assembled and before they are rendered.

## Parameters

| # | Parameter | Type | Description |
|---|-----------|------|-------------|
| 1 | `$atts` | array | Accumulated output attributes being passed through the filter chain. |
| 2 | `$settings` | array | Shortcode settings array from `WPBMap::getShortCode( $tag )`. |
| 3 | `$shortcode_atts` | array | Raw saved shortcode attributes currently stored for the element being edited. Empty array `[]` when adding a new element. |

## Usage

```php
<?php
add_filter( 'vc_edit_form_fields_attributes_vc_single_image', 'my_custom_image_atts', 10, 3 );

function my_custom_image_atts( $atts, $settings, $shortcode_atts ) {
    // Apply a new default only for existing elements, not newly inserted ones.
    if ( ! empty( $shortcode_atts ) && ! isset( $atts['link_target'] ) ) {
        $atts['link_target'] = '_self';
    }
    return $atts;
}
```

## Backwards Compatibility

Existing callbacks registered without an explicit `$accepted_args` argument (which defaults to `1`) are unaffected — they will simply not receive the two new parameters. Callbacks that need `$settings` or `$shortcode_atts` must be registered with `add_filter( ..., $callback, $priority, 3 )`.

## Source

File: `include/classes/editors/class-vc-edit-form-fields.php`
