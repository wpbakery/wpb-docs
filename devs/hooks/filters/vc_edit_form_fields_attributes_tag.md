---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_edit_form_fields_attributes_\{tag\}

Filters the shortcode attributes before they are used to populate the edit form fields. The dynamic portion of the hook name, `{tag}`, refers to the shortcode tag (e.g., `vc_column`, `vc_single_image`). This filter is useful for backward compatibility conversions or modifying attribute values before the edit form is rendered.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$atts` | array | The shortcode attributes array. |

## Usage

```php
<?php
add_filter( 'vc_edit_form_fields_attributes_vc_single_image', 'my_custom_image_atts' );

function my_custom_image_atts( $atts ) {
    // Convert legacy attribute format to new format
    if ( isset( $atts['img_link'] ) && ! isset( $atts['link'] ) ) {
        $atts['link'] = $atts['img_link'];
        unset( $atts['img_link'] );
    }
    return $atts;
}
```

## Source

File: `include/classes/editors/class-vc-edit-form-fields.php`
