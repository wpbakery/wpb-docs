---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_css_editor_background_style_options_data

Filters the available background style options in the CSS Editor (Design Options). These options control how the background image is displayed (e.g., cover, contain, repeat).

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$styles` | array | Associative array of background style options where keys are display labels and values are CSS values. Default includes: `Cover`, `Contain`, `No Repeat`, `Repeat`. |

## Usage

```php
<?php
add_filter( 'vc_css_editor_background_style_options_data', 'my_custom_bg_styles' );

function my_custom_bg_styles( $styles ) {
    // Add a custom background style option
    $styles['Fixed'] = 'fixed';
    return $styles;
}
```

## Source

File: `include/params/css_editor/css_editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 9.0 | Introduced. |
