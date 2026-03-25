---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_templates_render_backend_template_preview

Filters the preview content of a backend template rendered in the templates panel preview area.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$template_id` | string | The template ID. |
| `$template_type` | string | The template type (e.g., custom category name). |

## Usage

```php
<?php
add_filter( 'vc_templates_render_backend_template_preview', 'my_render_template_preview', 10, 2 );

function my_render_template_preview( $template_id, $template_type ) {
    if ( 'my_custom_type' === $template_type ) {
        // Return preview content for the custom template type.
        return '<div class="my-preview">Custom template preview</div>';
    }

    return $template_id;
}
```

## Source

File: `include/classes/editors/popups/class-vc-templates-panel-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.7 | Introduced. |
