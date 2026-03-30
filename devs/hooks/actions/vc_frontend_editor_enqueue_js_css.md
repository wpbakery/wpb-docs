---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_frontend_editor_enqueue_js_css

Fires when enqueueing JavaScript and CSS for the frontend editor. This hook runs after the frontend editor's built-in JS and CSS files have been enqueued, allowing you to add custom assets for the frontend editing experience.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_frontend_editor_enqueue_js_css', 'wpb_enqueue_custom_frontend_editor_assets' );

function wpb_enqueue_custom_frontend_editor_assets() {
    wp_enqueue_script(
        'my-frontend-editor-addon',
        plugins_url( 'js/frontend-editor-addon.js', __FILE__ ),
        [ 'jquery' ],
        '1.0.0',
        true
    );

    wp_enqueue_style(
        'my-frontend-editor-styles',
        plugins_url( 'css/frontend-editor.css', __FILE__ ),
        [],
        '1.0.0'
    );
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`
