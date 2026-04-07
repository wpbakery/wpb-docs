---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_frontend_editor_render_template

Fires when rendering a template in the frontend editor. This hook runs inside the frontend editor template file after the WordPress editor is initialized and the `editor-expand` script is dequeued.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_frontend_editor_render_template', 'wpb_on_frontend_template_render' );

function wpb_on_frontend_template_render() {
    // Add custom output or enqueue additional assets
    // during frontend editor template rendering
    wp_enqueue_script( 'my-template-helper', plugins_url( 'js/template-helper.js', __FILE__ ) );
}
```

## Source

File: `include/templates/editors/frontend_editor.tpl.php`
