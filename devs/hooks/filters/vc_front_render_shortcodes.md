---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_front_render_shortcodes

Filters the final HTML output of all rendered shortcodes in the frontend editor after they have been processed and assembled. This is called at the end of the shortcode rendering loop in the frontend editor's AJAX load handler.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | `string` | The complete HTML output containing all rendered shortcodes wrapped in their frontend editor data containers. |

## Usage

```php
add_filter( 'vc_front_render_shortcodes', 'wpb_modify_frontend_rendered_output' );

function wpb_modify_frontend_rendered_output( $output ) {
    // Add a custom wrapper around all rendered shortcodes
    return '<div class="my-custom-frontend-wrapper">' . $output . '</div>';
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`
