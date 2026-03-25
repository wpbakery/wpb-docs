---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_frontend_editor_to_string

Filters the shortcode data array before it is converted to a frontend editor string representation. This is used during the shortcode serialization process in the frontend editor, where shortcodes are wrapped with control markers.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$shortcode` | `array` | The shortcode data array containing keys such as `tag`, `attrs`, `id`, and `content`. |
| `$shortcode_obj` | `object` | The WPBakery shortcode object instance retrieved via `wpbakery()->getShortCode()`. |

## Usage

```php
add_filter( 'vc_frontend_editor_to_string', 'wpb_modify_shortcode_to_string', 10, 2 );

function wpb_modify_shortcode_to_string( $shortcode, $shortcode_obj ) {
    // Modify shortcode attributes before rendering in frontend editor
    if ( 'vc_row' === $shortcode['tag'] ) {
        $shortcode['attrs']['class'] = 'custom-row-class';
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
