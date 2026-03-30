---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_map_get_attributes

Filters the merged shortcode attributes after combining user-supplied values with registered defaults. This runs after `shortcode_atts()` processes the values, allowing final modification of all element attributes.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$atts` | array | The merged array of shortcode attributes (defaults combined with user-supplied values). |
| `$tag` | string | The shortcode tag name (e.g., `vc_column_text`). |

## Usage

```php
<?php
add_filter( 'vc_map_get_attributes', 'my_modify_element_attributes', 10, 2 );

function my_modify_element_attributes( $atts, $tag ) {
    // Force a specific CSS class for all vc_column_text elements
    if ( 'vc_column_text' === $tag ) {
        $atts['el_class'] = trim( ( $atts['el_class'] ?? '' ) . ' my-custom-class' );
    }
    return $atts;
}
```

## Source

File: `include/helpers/helpers_api.php`
