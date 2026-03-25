---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_templates_render_template

Filters the HTML output of a single template item within a template category list in the templates panel.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$name` | string | The template name used for display. |
| `$template` | array | The template data array containing template details. |

## Usage

```php
<?php
add_filter( 'vc_templates_render_template', 'my_render_template_item', 10, 2 );

function my_render_template_item( $name, $template ) {
    // Add a custom badge next to the template name.
    return '<span class="vc_ui-template-title">' . esc_html( $name ) . '</span>'
        . '<span class="my-badge">New</span>';
}
```

## Source

File: `include/classes/editors/popups/class-vc-templates-panel-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
