---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_templates\_delete\_templates

Fires when a template deletion is requested for a non-default template type. This hook allows third-party code to handle deletion of custom template types that are not stored in the built-in options table.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$template_id` | `string` | The ID of the template being deleted. |
| `$template_type` | `string` | The type of template being deleted. |

## Usage

```php
add_action( 'vc_templates_delete_templates', 'wpb_delete_custom_template', 10, 2 );

function wpb_delete_custom_template( $template_id, $template_type ) {
    if ( 'my_custom_type' === $template_type ) {
        // Handle deletion for custom template type
        delete_post_meta( $template_id, '_my_custom_template_data' );
        wp_send_json_success();
    }
}
```

## Source

File: `include/classes/editors/popups/class-vc-templates-panel-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.7 | Introduced. |
