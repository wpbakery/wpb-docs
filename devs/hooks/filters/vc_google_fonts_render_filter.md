---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_google_fonts_render_filter

Filters the rendered HTML output of the Google Fonts parameter field in the editor panel.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The rendered HTML markup for the Google Fonts parameter field. |

## Usage

```php
<?php
add_filter( 'vc_google_fonts_render_filter', 'my_custom_google_fonts_render', 10, 1 );

function my_custom_google_fonts_render( $output ) {
    // Wrap the Google Fonts field in a custom container
    return '<div class="my-google-fonts-wrapper">' . $output . '</div>';
}
```

## Source

File: `include/params/google_fonts/google_fonts.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.3 | Introduced. |
