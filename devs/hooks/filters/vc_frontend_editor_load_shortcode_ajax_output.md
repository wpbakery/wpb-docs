---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_frontend_editor_load_shortcode_ajax_output

Filters the complete AJAX output when loading a shortcode in the frontend editor. This output includes the rendered shortcode HTML along with any enqueued styles and scripts (wrapped in a files container div).

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | `string` | The full HTML output to be sent as the AJAX response, including rendered shortcode content and enqueued asset tags. |

## Usage

```php
add_filter( 'vc_frontend_editor_load_shortcode_ajax_output', 'wpb_modify_ajax_shortcode_output' );

function wpb_modify_ajax_shortcode_output( $output ) {
    // Append custom scripts or markup to the AJAX response
    $output .= '<script>console.log("Shortcode loaded");</script>';
    return $output;
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`
