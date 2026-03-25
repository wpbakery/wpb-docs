---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_templates_render_backend_template

Filters the rendered output of a backend template when it is loaded via AJAX in the templates panel.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$template_id` | string | The template ID. |
| `$template_type` | string | The template type (e.g., custom category name). |

## Usage

```php
<?php
add_filter( 'vc_templates_render_backend_template', 'my_render_backend_template', 10, 2 );

function my_render_backend_template( $template_id, $template_type ) {
    if ( 'my_custom_type' === $template_type ) {
        // Return custom shortcode content for a custom template type.
        return '[vc_row][vc_column][vc_column_text]Custom template content[/vc_column_text][/vc_column][/vc_row]';
    }

    return $template_id;
}
```

## Source

File: `include/classes/editors/popups/class-vc-templates-panel-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
