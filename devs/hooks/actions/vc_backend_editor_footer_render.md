---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_backend_editor_footer_render

Fires after the backend editor footer has been rendered. This hook runs at the end of the `renderEditorFooter()` method in both the `Vc_Backend_Editor` and `Vc_Grid_Item_Editor` classes, after the footer template has been included. Use this hook to output additional HTML or scripts in the editor footer area.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_backend_editor_footer_render', 'wpb_custom_footer_content' );

function wpb_custom_footer_content() {
    // Add custom templates or scripts to the backend editor footer
    ?>
    <script type="text/html" id="tmpl-my-custom-template">
        <div class="my-custom-panel">Custom panel content</div>
    </script>
    <?php
}
```

## Source

File: `include/classes/editors/class-vc-backend-editor.php`

File: `include/params/vc_grid_item/editor/class-vc-grid-item-editor.php`
