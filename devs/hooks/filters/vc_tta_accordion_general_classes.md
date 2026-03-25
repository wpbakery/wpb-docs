---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_tta_accordion_general_classes

Filters the array of CSS classes applied to the accordion (TTA) element wrapper.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$classes` | array | Array of CSS class strings for the accordion wrapper. |
| `$atts` | array | The shortcode attributes. |

## Usage

```php
<?php
add_filter( 'vc_tta_accordion_general_classes', 'my_accordion_classes', 10, 2 );

function my_accordion_classes( $classes, $atts ) {
    // Add a custom class to all accordions.
    $classes[] = 'my-custom-accordion';

    return $classes;
}
```

## Source

File: `include/classes/shortcodes/vc-tta-accordion.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.6 | Introduced. |
