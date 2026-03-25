---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc-render-templates-preview-template

Fires during the template preview rendering process. This hook runs when a template preview page is being loaded, allowing you to enqueue additional scripts, styles, or perform setup tasks needed for template previews in both the grid item editor and the main template preview contexts.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc-render-templates-preview-template', 'wpb_custom_template_preview_setup' );

function wpb_custom_template_preview_setup() {
    // Enqueue custom styles for template preview
    wp_enqueue_style( 'my-template-preview-css', plugins_url( 'css/template-preview.css', __FILE__ ) );
}
```

## Source

File: `include/templates/editors/vc_ui-template-preview.tpl.php`

File: `include/templates/params/vc_grid_item/editor/vc_ui-template-preview.tpl.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
