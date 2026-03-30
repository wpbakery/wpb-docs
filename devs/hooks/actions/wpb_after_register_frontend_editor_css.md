---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_after_register_frontend_editor_css

Fires after WPBakery registers its CSS stylesheets for the frontend editor. Receives the `Vc_Frontend_Editor` instance. Use this hook to register or enqueue additional CSS files for the frontend editor.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$editor` | `Vc_Frontend_Editor` | The frontend editor instance. |

## Usage

```php
add_action( 'wpb_after_register_frontend_editor_css', 'wpb_register_custom_frontend_css' );

function wpb_register_custom_frontend_css( $editor ) {
    wp_register_style(
        'my-frontend-editor-css',
        plugins_url( 'css/frontend-editor.css', __FILE__ ),
        [],
        '1.0.0'
    );
    wp_enqueue_style( 'my-frontend-editor-css' );
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`
