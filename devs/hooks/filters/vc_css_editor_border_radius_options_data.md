---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_css_editor_border_radius_options_data

Filters the available border radius options in the CSS Editor (Design Options). These options define the selectable border radius values for elements.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$radius_list` | array | Associative array of border radius options where keys are CSS values and values are display labels. Default includes: `None`, `1px` through `35px`. |

## Usage

```php
<?php
add_filter( 'vc_css_editor_border_radius_options_data', 'my_custom_border_radius' );

function my_custom_border_radius( $radius_list ) {
    // Add larger border radius options
    $radius_list['50px'] = '50px';
    $radius_list['100px'] = '100px';
    $radius_list['50%'] = '50% (Circle)';
    return $radius_list;
}
```

## Source

File: `include/params/css_editor/css_editor.php`
