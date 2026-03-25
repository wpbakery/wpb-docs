---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_inline_template_content

Filters the template content retrieved for the frontend (inline) editor. Allows modification of the raw template content before it is rendered.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$template_content` | string | The template content string used by the frontend editor. |

## Usage

```php
<?php
add_filter( 'vc_inline_template_content', 'my_modify_inline_template_content', 10, 1 );

function my_modify_inline_template_content( $template_content ) {
    // Modify or replace the template content
    $template_content = str_replace( '[old_shortcode]', '[new_shortcode]', $template_content );
    return $template_content;
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
