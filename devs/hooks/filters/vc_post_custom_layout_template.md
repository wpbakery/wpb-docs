---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_post_custom_layout_template

Filters the template file path used for a custom post layout. This allows you to override the resolved template path for custom layouts like "blank" with your own template file.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$template` | string | The full file path to the template being used. |
| `$layout_name` | string | The name of the custom layout (e.g., `'blank'`). |

## Usage

```php
<?php
add_filter( 'vc_post_custom_layout_template', 'my_custom_layout_template', 10, 2 );

function my_custom_layout_template( $template, $layout_name ) {
    // Use a theme template for the blank layout
    if ( 'blank' === $layout_name ) {
        $custom = get_template_directory() . '/vc-layouts/blank.php';
        if ( file_exists( $custom ) ) {
            return $custom;
        }
    }
    return $template;
}
```

## Source

File: `modules/post-custom-layout/module.php`

## Changelog

| Version | Description |
|---------|-------------|
| 7.7 | Introduced. |
