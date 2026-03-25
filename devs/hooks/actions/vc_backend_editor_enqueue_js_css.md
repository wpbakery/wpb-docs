---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_backend\_editor\_enqueue\_js\_css

Fires after the backend editor has enqueued its JavaScript and CSS files. This hook runs at the end of the `Vc_Backend_Editor::enqueueEditorScripts()` method, after all core editor scripts and styles have been enqueued. Use this hook to enqueue additional assets needed for the backend editor.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_backend_editor_enqueue_js_css', 'wpb_enqueue_custom_backend_assets' );

function wpb_enqueue_custom_backend_assets() {
    // Enqueue custom scripts and styles for the backend editor
    wp_enqueue_script(
        'my-backend-editor-js',
        plugins_url( 'js/backend-editor.js', __FILE__ ),
        array( 'jquery-core' ),
        '1.0.0',
        true
    );

    wp_enqueue_style(
        'my-backend-editor-css',
        plugins_url( 'css/backend-editor.css', __FILE__ ),
        array(),
        '1.0.0'
    );
}
```

## Source

File: `include/classes/editors/class-vc-backend-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.8 | Introduced. |
