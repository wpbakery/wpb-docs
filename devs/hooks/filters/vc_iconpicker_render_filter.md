---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_iconpicker_render_filter

Filters the rendered HTML output of the icon picker parameter field in the editor panel.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The rendered HTML markup for the icon picker parameter field. |

## Usage

```php
<?php
add_filter( 'vc_iconpicker_render_filter', 'my_custom_iconpicker_render', 10, 1 );

function my_custom_iconpicker_render( $output ) {
    // Add a custom wrapper around the icon picker field
    return '<div class="my-iconpicker-wrapper">' . $output . '</div>';
}
```

## Source

File: `include/params/iconpicker/iconpicker.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
