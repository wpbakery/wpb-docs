---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_editor_footer

Fires when rendering the editor footer partial. This hook runs at the end of the editor footer template and receives the current editor instance, which can be either the backend or frontend editor.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$editor` | `Vc_Backend_Editor\|Vc_Frontend_Editor` | The current editor instance. |

## Usage

```php
add_action( 'vc_editor_footer', 'wpb_custom_editor_footer', 10, 1 );

function wpb_custom_editor_footer( $editor ) {
    // Add custom content to the editor footer
    // Check which editor is active
    if ( $editor instanceof Vc_Frontend_Editor ) {
        echo '<script>console.log("Frontend editor footer loaded");</script>';
    }
}
```

## Source

File: `include/templates/editors/partials/footer.tpl.php`
