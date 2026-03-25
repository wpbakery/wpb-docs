---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_render_template_preview_include_template

Filters the template file path used to render the template preview in the backend editor. Use this to replace the default preview template with a custom one.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$template` | string | The relative template file path. Default: `'editors/vc_ui-template-preview.tpl.php'`. |

## Usage

```php
<?php
add_filter( 'vc_render_template_preview_include_template', 'my_custom_preview_template', 10, 1 );

function my_custom_preview_template( $template ) {
    // Use a custom template preview layout
    return 'editors/my-custom-template-preview.tpl.php';
}
```

## Source

File: `include/classes/editors/popups/class-vc-templates-panel-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 5.0 | Introduced. |
