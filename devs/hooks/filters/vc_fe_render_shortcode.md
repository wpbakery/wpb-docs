---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_fe_render_shortcode

Filters the shortcode data array before it is rendered in the frontend editor. This hook is called for each shortcode being loaded via AJAX in the frontend editor, allowing modification of the shortcode data before it is processed.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$shortcode` | `array` | The shortcode data array containing `id` (model ID), `string` (shortcode string), and `tag` (shortcode tag). |

## Usage

```php
add_filter( 'vc_fe_render_shortcode', 'wpb_modify_fe_shortcode_data' );

function wpb_modify_fe_shortcode_data( $shortcode ) {
    if ( 'vc_row' === $shortcode['tag'] ) {
        // Modify the shortcode string before rendering
        $shortcode['string'] = str_replace( 'old_class', 'new_class', $shortcode['string'] );
    }
    return $shortcode;
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
