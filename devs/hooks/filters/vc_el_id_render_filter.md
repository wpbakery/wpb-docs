---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_el_id_render_filter

Filters the rendered HTML output of the `el_id` parameter type form field. This parameter type is used to create an input text field specifically for setting a custom element ID.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value_output` | `string` | The HTML output of the `el_id` parameter field, rendered from the `params/el_id/template.php` template. |

## Usage

```php
add_filter( 'vc_el_id_render_filter', 'wpb_customize_el_id_field' );

function wpb_customize_el_id_field( $value_output ) {
    // Add a helpful description after the field
    $value_output .= '<p class="description">Enter a unique ID for this element.</p>';
    return $value_output;
}
```

## Source

File: `include/params/el_id/el_id.php`
