---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_font_container_render_filter

Filters the final rendered HTML output of the entire font container parameter form field. This is applied after all sub-fields (tag, font family, size, color, etc.) have been rendered.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | `string` | The complete HTML output of the font container parameter field. |

## Usage

```php
add_filter( 'vc_font_container_render_filter', 'wpb_wrap_font_container' );

function wpb_wrap_font_container( $output ) {
    // Wrap the font container output with a custom div
    return '<div class="my-font-container-wrapper">' . $output . '</div>';
}
```

## Source

File: `include/params/font_container/font_container.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.3 | Introduced. |
