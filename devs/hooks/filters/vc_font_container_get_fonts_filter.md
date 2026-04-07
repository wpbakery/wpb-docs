---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_font_container_get_fonts_filter

Filters the list of web-safe fonts available in the font container parameter's font family selector. By default, this includes common web-safe fonts such as Georgia, Arial, Helvetica, Times New Roman, and others from the W3C web-safe fonts list.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$web_fonts` | `array` | An associative array of font names and their CSS font-family values. Keys are font display names, values are CSS font-family strings (e.g., `['Arial' => 'Arial, Helvetica, sans-serif']`). |

## Usage

```php
add_filter( 'vc_font_container_get_fonts_filter', 'wpb_add_custom_fonts' );

function wpb_add_custom_fonts( $web_fonts ) {
    // Add custom fonts to the font container dropdown
    $web_fonts['Open Sans'] = '"Open Sans", sans-serif';
    $web_fonts['Roboto'] = 'Roboto, sans-serif';
    return $web_fonts;
}
```

## Source

File: `include/params/font_container/font_container.php`
