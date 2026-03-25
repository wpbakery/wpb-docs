---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_google_fonts_get_fonts_filter

Filters the list of Google Fonts available in the Google Fonts parameter type. This allows adding, removing, or modifying the fonts displayed in the font picker.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$fonts` | array | An array of font objects decoded from JSON, each containing font family data and available variants. |

## Usage

```php
<?php
add_filter( 'vc_google_fonts_get_fonts_filter', 'my_custom_google_fonts', 10, 1 );

function my_custom_google_fonts( $fonts ) {
    // Remove fonts you don't need to reduce the list
    $fonts = array_filter( $fonts, function( $font ) {
        return in_array( $font->font_family, array( 'Roboto', 'Open Sans', 'Lato' ), true );
    } );
    return array_values( $fonts );
}
```

## Source

File: `include/params/google_fonts/google_fonts.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.3 | Introduced. |
