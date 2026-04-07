---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_frontend_editor_render

Fires when the frontend editor is rendered. This hook runs during the frontend editor's render process, after the inline editor action and before admin title filters are applied. Use it to add custom functionality when the frontend editor view is being prepared.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_frontend_editor_render', 'wpb_on_frontend_editor_render' );

function wpb_on_frontend_editor_render() {
    // Add custom functionality during frontend editor rendering
    add_filter( 'admin_title', 'my_custom_frontend_editor_title' );
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`
