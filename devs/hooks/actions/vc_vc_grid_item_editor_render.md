---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_vc_grid_item_editor_render

Fires when the WPBakery Grid Item editor is rendered. This hook runs after the backend editor render action within the grid item editor context, allowing you to add custom functionality specific to the grid item editing experience.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_vc_grid_item_editor_render', 'wpb_on_grid_item_editor_render' );

function wpb_on_grid_item_editor_render() {
    // Add custom functionality to the grid item editor
    wp_enqueue_script(
        'my-grid-item-editor',
        plugins_url( 'js/grid-item-editor.js', __FILE__ ),
        [ 'jquery' ],
        '1.0.0',
        true
    );
}
```

## Source

File: `include/params/vc_grid_item/editor/class-vc-grid-item-editor.php`
