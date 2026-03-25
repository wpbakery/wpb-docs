---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_get_user_templates

Filters the array of user-saved templates retrieved from the WordPress options table. These are templates that users have saved through the WPBakery template save functionality.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$templates` | `array\|false` | An array of user template data as stored in the database option, or `false` if no templates exist. Each template entry typically contains `name` and `template` (shortcode content) keys. |

## Usage

```php
add_filter( 'vc_get_user_templates', 'wpb_filter_user_templates' );

function wpb_filter_user_templates( $templates ) {
    if ( ! is_array( $templates ) ) {
        return $templates;
    }

    // Remove templates that contain deprecated shortcodes
    foreach ( $templates as $key => $template ) {
        if ( strpos( $template['template'], '[deprecated_element]' ) !== false ) {
            unset( $templates[ $key ] );
        }
    }

    return $templates;
}
```

## Source

File: `include/classes/editors/popups/class-vc-templates-panel-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.12 | Introduced. |
