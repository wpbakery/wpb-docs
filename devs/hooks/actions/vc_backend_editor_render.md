---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_backend\_editor\_render

Fires after the backend editor has been rendered. This hook runs inside the `renderEditor()` method of both `Vc_Backend_Editor` and `Vc_Grid_Item_Editor`, after the editor template has been included and the footer render action has been scheduled. Use this hook to add custom functionality when the backend editor is displayed.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_backend_editor_render', 'wpb_on_backend_editor_render' );

function wpb_on_backend_editor_render() {
    // Add custom behavior when the backend editor renders
    // e.g., enqueue additional scripts for custom elements
    wp_enqueue_script(
        'my-element-editor-js',
        plugins_url( 'js/element-editor.js', __FILE__ ),
        array( 'jquery-core' ),
        '1.0.0',
        true
    );
}
```

## Source

File: `include/classes/editors/class-vc-backend-editor.php`

File: `include/params/vc_grid_item/editor/class-vc-grid-item-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
