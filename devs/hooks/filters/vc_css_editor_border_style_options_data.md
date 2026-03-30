---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_css_editor_border_style_options_data

Filters the available border style options in the CSS Editor (Design Options). These options define the selectable CSS border styles for elements.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$styles` | array | Array of border style option strings. Default includes: `solid`, `dotted`, `dashed`, `none`, `hidden`. |

## Usage

```php
<?php
add_filter( 'vc_css_editor_border_style_options_data', 'my_custom_border_styles' );

function my_custom_border_styles( $styles ) {
    // Add additional border style options
    $styles[] = 'double';
    $styles[] = 'groove';
    $styles[] = 'ridge';
    return $styles;
}
```

## Source

File: `include/params/css_editor/css_editor.php`
