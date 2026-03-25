---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb\_after\_register\_frontend\_editor\_js

Fires after WPBakery registers its JavaScript files for the frontend editor. Receives the `Vc_Frontend_Editor` instance. Use this hook to register or enqueue additional JavaScript files for the frontend editor.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$editor` | `Vc_Frontend_Editor` | The frontend editor instance. |

## Usage

```php
add_action( 'wpb_after_register_frontend_editor_js', 'wpb_register_custom_frontend_js' );

function wpb_register_custom_frontend_js( $editor ) {
    wp_register_script(
        'my-frontend-editor-js',
        plugins_url( 'js/frontend-editor.js', __FILE__ ),
        array( 'vc-frontend-editor-min-js' ),
        '1.0.0',
        true
    );
    wp_enqueue_script( 'my-frontend-editor-js' );
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.3 | Introduced. |
