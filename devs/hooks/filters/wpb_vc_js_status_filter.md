---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_vc_js_status_filter

Filters the WPBakery editor status for the current post. This determines whether the WPBakery editor is enabled or disabled for the post being edited.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$status` | mixed | The editor status value. Typically `'true'` or `'false'` as a string, or a boolean. |

## Usage

```php
<?php
add_filter( 'wpb_vc_js_status_filter', 'my_custom_editor_status' );

function my_custom_editor_status( $status ) {
    // Force WPBakery editor to be active for a specific post type
    if ( 'landing_page' === get_post_type() ) {
        return 'true';
    }
    return $status;
}
```

## Source

File: `include/classes/editors/class-vc-backend-editor.php`, `include/classes/editors/class-vc-frontend-editor.php`
