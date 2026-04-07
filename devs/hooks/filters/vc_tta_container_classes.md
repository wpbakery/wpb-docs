---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_tta_container_classes

Filters the array of CSS classes applied to the TTA (Tabs, Tours, Accordions) container element.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$classes` | array | Array of CSS class strings for the TTA container. |
| `$atts` | array | The shortcode attributes. |

## Usage

```php
<?php
add_filter( 'vc_tta_container_classes', 'my_tta_container_classes', 10, 2 );

function my_tta_container_classes( $classes, $atts ) {
    // Add a wrapper class based on an attribute value.
    if ( ! empty( $atts['style'] ) && 'modern' === $atts['style'] ) {
        $classes[] = 'my-modern-tta';
    }

    return $classes;
}
```

## Source

File: `include/classes/shortcodes/vc-tta-accordion.php`
