---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb\_after\_register\_backend\_editor\_js

Fires after WPBakery registers its JavaScript files for the backend editor. Receives the `Vc_Backend_Editor` instance. Use this hook to register or enqueue additional JavaScript files for the backend editor.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$editor` | `Vc_Backend_Editor` | The backend editor instance. |

## Usage

```php
add_action( 'wpb_after_register_backend_editor_js', 'wpb_register_custom_backend_js' );

function wpb_register_custom_backend_js( $editor ) {
    wp_register_script(
        'my-backend-editor-js',
        plugins_url( 'js/backend-editor.js', __FILE__ ),
        array( 'vc-backend-actions-js' ),
        '1.0.0',
        true
    );
    wp_enqueue_script( 'my-backend-editor-js' );
}
```

## Source

File: `include/classes/editors/class-vc-backend-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.3 | Introduced. |
