---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_ui-template-preview

Fires during the template preview rendering in both the backend editor and the grid item editor. Use this hook to enqueue additional scripts or output custom markup needed for template previews.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_ui-template-preview', 'wpb_custom_template_preview_assets' );

function wpb_custom_template_preview_assets() {
    // Enqueue scripts or styles for template preview
    wp_enqueue_script(
        'my-template-preview',
        plugins_url( 'js/template-preview.js', __FILE__ ),
        [ 'jquery' ],
        '1.0.0',
        true
    );
}
```

## Source

File: `include/templates/editors/vc_ui-template-preview.tpl.php`
