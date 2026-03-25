---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_translate_column_width_class

Filters the CSS class generated from a column width fraction (e.g., `1/2` becomes `vc_col-sm-6`).

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The translated CSS class string (e.g., `vc_col-sm-6`). |
| `$width` | string | The original column width fraction (e.g., `1/2`, `1/3`, `2/5`). |

## Usage

```php
<?php
add_filter( 'vc_translate_column_width_class', 'my_custom_column_class', 10, 2 );

function my_custom_column_class( $output, $width ) {
    // Use custom grid classes instead of the default ones.
    if ( '1/4' === $width ) {
        return 'my-grid-col-3';
    }

    return $output;
}
```

## Source

File: `include/helpers/helpers.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
