---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_after_register_backend_editor_css

Fires after WPBakery registers its CSS stylesheets for the backend editor. Receives the `Vc_Backend_Editor` instance. Use this hook to register or enqueue additional CSS files for the backend editor.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$editor` | `Vc_Backend_Editor` | The backend editor instance. |

## Usage

```php
add_action( 'wpb_after_register_backend_editor_css', 'wpb_register_custom_backend_css' );

function wpb_register_custom_backend_css( $editor ) {
    wp_register_style(
        'my-backend-editor-css',
        plugins_url( 'css/backend-editor.css', __FILE__ ),
        [ 'wp-bakery' ],
        '1.0.0'
    );
    wp_enqueue_style( 'my-backend-editor-css' );
}
```

## Source

File: `include/classes/editors/class-vc-backend-editor.php`
