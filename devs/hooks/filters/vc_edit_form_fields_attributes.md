---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_edit_form_fields_attributes

Filters the shortcode attributes of every element before they are used to populate the edit form fields. It runs before the element specific [`vc_edit_form_fields_attributes_{tag}`](/devs/hooks/filters/vc_edit_form_fields_attributes_tag) filter and suits conversions that apply to all elements. WPBakery Page Builder uses it to convert the legacy per device hide attributes to `hide_element`. Available since version 9.1.

Fires when WPBakery opens the element edit form popup, just after the form attributes are assembled and before they are rendered.

## Parameters

| # | Parameter | Type | Description |
|---|-----------|------|-------------|
| 1 | `$atts` | array | Attributes being passed through the filter chain. |
| 2 | `$tag` | string | Shortcode tag of the element being edited (e.g., `vc_column`). |
| 3 | `$settings` | array | Shortcode settings array from `WPBMap::getShortCode( $tag )`. |

## Usage

```php
<?php
add_filter( 'vc_edit_form_fields_attributes', 'my_convert_legacy_atts', 10, 3 );

function my_convert_legacy_atts( $atts, $tag, $settings ) {
    // Rename an attribute that was dropped from all elements.
    if ( isset( $atts['old_name'] ) && ! isset( $atts['new_name'] ) ) {
        $atts['new_name'] = $atts['old_name'];
    }
    return $atts;
}
```

## Source

File: `include/classes/editors/class-vc-edit-form-fields.php`
